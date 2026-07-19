import { ShaderMaterial, SRGBColorSpace, TextureLoader, Vector2 } from "three"
import { century, declination, equationOfTime } from "solar-calculator"

const dayNightShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec2 vUv;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    #define PI 3.141592653589793
    uniform sampler2D dayTexture;
    uniform sampler2D nightTexture;
    uniform sampler2D bumpTexture;
    uniform vec2 sunPosition;
    uniform vec2 globeRotation;
    uniform float bumpStrength;
    varying vec3 vNormal;
    varying vec2 vUv;

    float toRad(in float a) {
      return a * PI / 180.0;
    }

    vec3 Polar2Cartesian(in vec2 c) {
      float theta = toRad(90.0 - c.x);
      float phi = toRad(90.0 - c.y);
      return vec3(
        sin(phi) * cos(theta),
        cos(phi),
        sin(phi) * sin(theta)
      );
    }

    void main() {
      float invLon = toRad(globeRotation.x);
      float invLat = -toRad(globeRotation.y);
      mat3 rotX = mat3(
        1.0, 0.0, 0.0,
        0.0, cos(invLat), -sin(invLat),
        0.0, sin(invLat), cos(invLat)
      );
      mat3 rotY = mat3(
        cos(invLon), 0.0, sin(invLon),
        0.0, 1.0, 0.0,
        -sin(invLon), 0.0, cos(invLon)
      );

      vec3 sunDir = normalize(rotX * rotY * Polar2Cartesian(sunPosition));
      float intensity = dot(normalize(vNormal), sunDir);

      vec4 dayColor = texture2D(dayTexture, vUv);
      vec4 nightColor = texture2D(nightTexture, vUv);
      float bump = texture2D(bumpTexture, vUv).r;
      dayColor.rgb *= 0.88 + bump * bumpStrength;

      float blend = smoothstep(-0.12, 0.18, intensity);
      float twilight = smoothstep(-0.05, 0.08, intensity) * (1.0 - smoothstep(0.08, 0.35, intensity));
      vec3 color = mix(nightColor.rgb * 1.15, dayColor.rgb, blend);
      color += vec3(1.0, 0.45, 0.18) * twilight * 0.18;

      float ocean = 1.0 - smoothstep(0.22, 0.55, dayColor.b - dayColor.r * 0.35);
      float spec = pow(max(intensity, 0.0), 28.0) * ocean * 0.35;
      color += vec3(0.55, 0.75, 1.0) * spec;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

export function sunPositionAt(dt: number): [number, number] {
  const day = new Date(dt).setUTCHours(0, 0, 0, 0)
  const t = century(dt)
  const longitude = ((day - dt) / 864e5) * 360 - 180
  return [longitude - equationOfTime(t) / 4, declination(t)]
}

export async function createDayNightMaterial(
  dayUrl: string,
  nightUrl: string,
  bumpUrl: string,
): Promise<ShaderMaterial> {
  const loader = new TextureLoader()
  const [dayTexture, nightTexture, bumpTexture] = await Promise.all([
    loader.loadAsync(dayUrl),
    loader.loadAsync(nightUrl),
    loader.loadAsync(bumpUrl),
  ])

  dayTexture.colorSpace = SRGBColorSpace
  nightTexture.colorSpace = SRGBColorSpace

  return new ShaderMaterial({
    uniforms: {
      dayTexture: { value: dayTexture },
      nightTexture: { value: nightTexture },
      bumpTexture: { value: bumpTexture },
      sunPosition: { value: new Vector2(...sunPositionAt(Date.now())) },
      globeRotation: { value: new Vector2(0, 0) },
      bumpStrength: { value: 0.22 },
    },
    vertexShader: dayNightShader.vertexShader,
    fragmentShader: dayNightShader.fragmentShader,
  })
}
