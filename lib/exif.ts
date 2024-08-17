import { ExifDataInterface } from '@/types'

export type NullableExif = ExifDataInterface | null | undefined

export const getExifValue = <T extends keyof ExifDataInterface>(
  exif: NullableExif,
  key: T,
  defaultValue: ExifDataInterface[T]
): ExifDataInterface[T] => {
  return exif && key in exif ? exif[key] : defaultValue
}

export const formatExposureTime = (
  exposureTime: number | undefined
): string => {
  if (!exposureTime) return 'N/A'
  return exposureTime < 1
    ? `1/${Math.round(1 / exposureTime)}`
    : `${exposureTime}`
}

export const formatAperture = (fNumber: number | undefined): string => {
  return fNumber ? `ƒ/${fNumber.toFixed(1)}` : 'N/A'
}
