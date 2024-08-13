import { useCallback, useMemo, useState } from 'react'

import { TakeInterface } from '@/types'

type FilterType = 'Date' | 'Title' | 'Random'

interface FilterState {
  isReversed: boolean
}

export const useFilteredAndSortedTakes = (
  initialTakes: TakeInterface[],
  initialFilter: FilterType,
  initialSearchQuery: string
) => {
  const [takes] = useState<TakeInterface[]>(initialTakes)
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter)
  const [filterStates, setFilterStates] = useState<
    Record<FilterType, FilterState>
  >({
    Date: { isReversed: false },
    Title: { isReversed: false },
    Random: { isReversed: false }
  })
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  const handleFilterChange = useCallback(
    (filterType: FilterType) => {
      if (activeFilter === filterType) {
        setFilterStates(prev => ({
          ...prev,
          [filterType]: { isReversed: !prev[filterType].isReversed }
        }))
      } else {
        setActiveFilter(filterType)
      }
    },
    [activeFilter]
  )

  const filteredAndSortedTakes = useMemo(() => {
    let filtered = [...takes]

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(
        take =>
          take.title.toLowerCase().includes(query) ||
          take.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    const { isReversed } = filterStates[activeFilter]
    switch (activeFilter) {
      case 'Date':
        filtered.sort((a, b) => {
          const comparison =
            new Date(b.date).getTime() - new Date(a.date).getTime()
          return isReversed ? -comparison : comparison
        })
        break
      case 'Title':
        filtered.sort((a, b) => {
          const comparison = a.title.localeCompare(b.title)
          return isReversed ? -comparison : comparison
        })
        break
      case 'Random':
        filtered.sort(() => Math.random() - 0.5)
        break
    }

    return filtered
  }, [takes, activeFilter, filterStates, searchQuery])

  return {
    filteredAndSortedTakes,
    filterStates,
    handleFilterChange,
    setSearchQuery
  }
}
