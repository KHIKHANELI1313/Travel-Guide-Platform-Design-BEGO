import {
  findTourismService,
  unitLabel,
  type TourismService,
} from "../../data/destinations/tourismServices"

export type BudgetLine = {
  id: string
  name: string
  amount: number
  note: string
}

export type BudgetCategoryRow = {
  id: string
  title: string
  total: number
  lines: BudgetLine[]
}

export type BudgetBreakdown = {
  byCategory: BudgetCategoryRow[]
  totalGel: number
  totalUsd: number
  dailyAverageGel: number
  perPersonGel: number
  selectedCount: number
}

function lineTotal(service: TourismService, days: number, travelers: number): number {
  const rooms = Math.ceil(travelers / 2)
  switch (service.unit) {
    case "night":
      return service.price * days * rooms
    case "person":
      return service.price * travelers
    case "day":
      return service.price * days
    case "booking":
      return service.price
    case "info":
      return 0
  }
}

function lineNote(service: TourismService, days: number, travelers: number): string {
  const rooms = Math.ceil(travelers / 2)
  switch (service.unit) {
    case "night":
      return `${formatGel(service.price)} × ${days} ღამე × ${rooms} ოთახი`
    case "person":
      return `${formatGel(service.price)} × ${travelers} ადამიანი`
    case "day":
      return `${formatGel(service.price)} × ${days} დღე`
    case "booking":
      return `${formatGel(service.price)} ${unitLabel("booking")}`
    case "info":
      return "უფასო ინფორმაცია"
  }
}

export function calculateSelectedServices(
  selectedIds: string[],
  categoryMeta: { id: string; title: string; itemIds: string[] }[],
  usdRate: number,
  days = 4,
  travelers = 2,
): BudgetBreakdown {
  const safeDays = Math.max(1, days)
  const safeTravelers = Math.max(1, travelers)
  const selected = new Set(selectedIds)

  const byCategory: BudgetCategoryRow[] = []

  for (const cat of categoryMeta) {
    const lines: BudgetLine[] = []
    let total = 0

    for (const id of cat.itemIds ?? []) {
      if (!selected.has(id)) continue
      const service = findTourismService(id)
      if (!service) continue
      const amount = lineTotal(service, safeDays, safeTravelers)
      total += amount
      lines.push({
        id: service.id,
        name: service.name,
        amount,
        note: lineNote(service, safeDays, safeTravelers),
      })
    }

    if (lines.length > 0) {
      byCategory.push({ id: cat.id, title: cat.title, total, lines })
    }
  }

  const totalGel = byCategory.reduce((s, c) => s + c.total, 0)

  return {
    byCategory,
    totalGel,
    totalUsd: totalGel * usdRate,
    dailyAverageGel: totalGel / safeDays,
    perPersonGel: totalGel / safeTravelers,
    selectedCount: selectedIds.length,
  }
}

export function formatGel(amount: number): string {
  return `${Math.round(amount).toLocaleString("en-US")} ₾`
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

export function toggleInList<T>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item]
}
