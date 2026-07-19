from pathlib import Path

p = Path(__file__).resolve().parents[1] / "src" / "data" / "destinations" / "tourismServices.ts"
text = p.read_text(encoding="utf-8")
lines = text.splitlines(keepends=True)
out = []
seen_plan_map = False
for line in lines:
    if 'id: "plan-map"' in line:
        if "ინტერაქტიული რუკა" in line and not seen_plan_map:
            out.append(
                '      { id: "plan-map", name: "ინტერაქტიული რუკა", price: 0, unit: "info" },\n'
            )
            seen_plan_map = True
        continue
    out.append(line)

if not seen_plan_map:
    fixed = []
    for line in out:
        fixed.append(line)
        if 'id: "plan-weather"' in line:
            fixed.append(
                '      { id: "plan-map", name: "ინტერაქტიული რუკა", price: 0, unit: "info" },\n'
            )
            seen_plan_map = True
    out = fixed

p.write_text("".join(out), encoding="utf-8")
print("OK")
for line in p.read_text(encoding="utf-8").splitlines():
    if "plan-map" in line or "plan-weather" in line or "plan-offline" in line:
        print(line)
