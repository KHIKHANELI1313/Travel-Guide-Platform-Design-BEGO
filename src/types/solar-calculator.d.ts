declare module "solar-calculator" {
  export function century(date: number | Date): number
  export function declination(t: number): number
  export function equationOfTime(t: number): number
}
