import resolveConfig from 'tailwindcss/resolveConfig'

import config from '../../tailwind.config'

export const initialFilters = [
  { level: 1, active: false },
  { level: 2, active: false },
  { level: 3, active: false },
  { level: 4, active: false },
  { level: 5, active: false },
  { level: 6, active: false },
  { level: 7, active: false },
  { level: 8, active: false },
  { level: 9, active: false },
  { level: 10, active: false },
  { level: 11, active: false },
  { level: 12, active: false },
  { level: 13, active: false },
  { level: 14, active: false },
  { level: 15, active: false },
]

/**
 * Returns an array of numbers as a formatted string, where single numbers are separated by a comma
 * and ranges by a given separator string or by the default separator, e.g. '2, 5, 6 - 8, 12'
 *
 * @param {Array<number>} values
 * @param {string} separator separator for ranges
 */
export const toRanges = (values: number[], separator = ' - '): string => {
  const formatted = values
    .reduce((acc: number[][], current, index, src) => {
      if (index > 0 && current - src[index - 1] === 1) acc[acc.length - 1][1] = current
      else acc.push([current])
      return acc
    }, [])
    .map((range) => range.join(separator))
    .join(', ')
  return formatted
}

/**
 * Returns a color for level indicator (below 5 = green, 6-10 = orange, above 10 = red)
 *
 * @param {number} level
 */
export const getColor = (level: number): string => {
  const tailwindConfig = resolveConfig(config)
  const colors = tailwindConfig.theme?.colors
  return level > 10 ? colors.red : level > 5 ? colors.orange : colors.green
}

/**
 * Returns a degree number of a value (multiplier) based on how many parts a circle is divided into (divider)
 *
 * @param {number} multiplier the degree number of the given value
 * @param {number} divider how many parts the circle has in total
 */
export const getDegree = (multiplier: number, divider: number): number => {
  return (360 / divider) * multiplier
}
