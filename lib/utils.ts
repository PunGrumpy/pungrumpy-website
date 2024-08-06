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
