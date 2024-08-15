import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateString(
  date: string,
  month: Intl.DateTimeFormatOptions['month'] = 'long',
  day: Intl.DateTimeFormatOptions['day'] = 'numeric',
  year: Intl.DateTimeFormatOptions['year'] = 'numeric'
) {
  return new Date(date).toLocaleDateString('en-US', {
    month,
    day,
    year
  })
}

export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return []

  const currentYear = new Date().getFullYear()
  const duration = currentYear - joinYear + 1
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i)
  return years
}

export function convertExposureTime(exposureTime: number): string {
  if (exposureTime >= 1) {
    return `${exposureTime}"`
  } else {
    const denominator = Math.round(1 / exposureTime)
    return `1/${denominator}`
  }
}
