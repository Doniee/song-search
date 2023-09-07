import { useEffect } from 'react'

export const useTimer = (condition: boolean, callback: () => void, delay: number): void => {
  useEffect(() => {
    if (condition) {
      const timeId = setTimeout(() => {
        callback()
      }, delay)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [condition, callback, delay])
}

/**
 * Returns query parameters for fetching songs based on search input value and selected level filters
 *
 * @param {string} query the value from search input
 * @param {Array<number>} filters selected level filters
 */
export const getFormattedQuery = (query: string, filters: number[]) => {
  if (query !== '' || filters.length > 0) {
    const trimmedQuery = query.replace(/[&/\\#,+()$~%":*?<>{}]/g, '')
    const search = trimmedQuery !== '' ? [`search_like=${trimmedQuery}`] : []
    const filter = filters.map((item) => `level=${item}`)
    const fullQuery = [...search, ...filter].join('&')
    return `&${fullQuery}`
  } else {
    return ''
  }
}
