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
  if (exposureTime === undefined) return 'N/A'
  if (exposureTime === 0) return '0'
  if (exposureTime < 1) {
    const denominator = Math.round(1 / exposureTime)
    return `1/${denominator}`
  }
  return exposureTime.toFixed(1)
}

export const formatAperture = (fNumber: number | undefined): string => {
  return fNumber !== undefined ? `ƒ/${fNumber.toFixed(1)}` : 'N/A'
}

export const formatFocalLength = (focalLength: number | undefined): string => {
  return focalLength !== undefined ? `${Math.round(focalLength)}mm` : 'N/A'
}

export const formatISO = (iso: number | undefined): string => {
  return iso !== undefined ? `ISO ${iso}` : 'N/A'
}

export const formatExposureBias = (bias: number | undefined): string => {
  if (bias === undefined) return 'N/A'
  const sign = bias > 0 ? '+' : ''
  return `${sign}${bias.toFixed(1)} EV`
}

export const getLensInfo = (exif: NullableExif): string => {
  const lensModel = getExifValue(exif, 'LensModel', 'Unknown')
  const focalLength = formatFocalLength(
    getExifValue(exif, 'FocalLength', undefined)
  )
  return `${lensModel} at ${focalLength}`
}

export const getExposureInfo = (exif: NullableExif): string => {
  const aperture = formatAperture(getExifValue(exif, 'FNumber', undefined))
  const shutterSpeed = formatExposureTime(
    getExifValue(exif, 'ExposureTime', undefined)
  )
  const iso = formatISO(getExifValue(exif, 'ISO', undefined))
  return `${aperture}, ${shutterSpeed}s, ${iso}`
}

export const hasValidExif = (exif: NullableExif): boolean => {
  return exif !== null && exif !== undefined && Object.keys(exif).length > 0
}

export const summarizeExif = (exif: NullableExif): string => {
  if (!hasValidExif(exif)) return 'No EXIF data available'

  const lensInfo = getLensInfo(exif)
  const exposureInfo = getExposureInfo(exif)
  const bias = formatExposureBias(
    getExifValue(exif, 'ExposureBiasValue', undefined)
  )

  return `${lensInfo}. ${exposureInfo}. Exposure bias: ${bias}`
}
