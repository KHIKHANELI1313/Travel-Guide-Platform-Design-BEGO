import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const p = join(root, "src", "data", "destinations", "tourismServices.ts")
const text = readFileSync(p, "utf8")
const lines = text.split(/(?<=\n)/)
const out = []
let seenPlanMap = false

for (const line of lines) {
  if (line.includes('id: "plan-map"')) {
    if (line.includes("ინტერაქტიული რუკა") && !seenPlanMap) {
      out.push('      { id: "plan-map", name: "ინტერაქტიული რუკა", price: 0, unit: "info" },\n')
      seenPlanMap = true
    }
    continue
  }
  out.push(line)
}

if (!seenPlanMap) {
  const fixed = []
  for (const line of out) {
    fixed.push(line)
    if (line.includes('id: "plan-weather"')) {
      fixed.push('      { id: "plan-map", name: "ინტერაქტიული რუკა", price: 0, unit: "info" },\n')
      seenPlanMap = true
    }
  }
  writeFileSync(p, fixed.join(""), "utf8")
} else {
  writeFileSync(p, out.join(""), "utf8")
}

const result = readFileSync(p, "utf8")
console.log("OK")
for (const line of result.split("\n")) {
  if (line.includes("plan-map") || line.includes("plan-weather") || line.includes("plan-offline")) {
    console.log(line)
  }
}
