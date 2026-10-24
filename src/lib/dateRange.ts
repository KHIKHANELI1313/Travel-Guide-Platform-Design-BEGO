/** Allowed day-of-month window for travel date selection. */
export const MIN_SELECTABLE_DAY = 1
export const MAX_SELECTABLE_DAY = 20

export type DateParts = { year: number; month: number; day: number }

export function parseISODate(value: string): DateParts | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim())
  if (!m) return null
  const year = Number(m[1])
  const month = Number(m[2])
  const day = Number(m[3])
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return null
  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  const dt = new Date(Date.UTC(year, month - 1, day))
  if (dt.getUTCFullYear() !== year || dt.getUTCMonth() !== month - 1 || dt.getUTCDate() !== day) {
    return null
  }
  return { year, month, day }
}

export function toISODate(parts: DateParts): string {
  const y = String(parts.year).padStart(4, "0")
  const m = String(parts.month).padStart(2, "0")
  const d = String(parts.day).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function compareISODate(a: string, b: string): number {
  return a.localeCompare(b)
}

export function isSelectableDay(day: number): boolean {
  return day >= MIN_SELECTABLE_DAY && day <= MAX_SELECTABLE_DAY
}

export function isValidSelectableISODate(value: string): boolean {
  const parts = parseISODate(value)
  return Boolean(parts && isSelectableDay(parts.day))
}

export type DateRangeValidation = {
  startError: string | null
  endError: string | null
  rangeError: string | null
  isValid: boolean
}

export function validateDateRange(start: string, end: string): DateRangeValidation {
  let startError: string | null = null
  let endError: string | null = null
  let rangeError: string | null = null

  if (!start) startError = "Please select a start date."
  else if (!parseISODate(start)) startError = "Start date is invalid."
  else if (!isValidSelectableISODate(start)) {
    startError = `Start date must fall between day ${MIN_SELECTABLE_DAY} and ${MAX_SELECTABLE_DAY}.`
  }

  if (!end) endError = "Please select an end date."
  else if (!parseISODate(end)) endError = "End date is invalid."
  else if (!isValidSelectableISODate(end)) {
    endError = `End date must fall between day ${MIN_SELECTABLE_DAY} and ${MAX_SELECTABLE_DAY}.`
  }

  if (!startError && !endError && compareISODate(end, start) < 0) {
    rangeError = "End date cannot be earlier than start date."
  }

  return {
    startError,
    endError,
    rangeError,
    isValid: !startError && !endError && !rangeError,
  }
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate()
}

export function startOfCalendarGrid(year: number, month: number): number {
  // 0 = Sunday … 6 = Saturday (UTC)
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay()
}

export function formatDisplayDate(iso: string): string {
  const parts = parseISODate(iso)
  if (!parts) return ""
  const dt = new Date(Date.UTC(parts.year, parts.month - 1, parts.day))
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

export function monthLabel(year: number, month: number): string {
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
