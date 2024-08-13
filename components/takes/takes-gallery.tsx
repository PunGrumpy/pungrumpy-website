'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { SearchIcon } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

import { FilterButton } from '@/components/button/filter-button'
import { GalleryCard } from '@/components/card/gallery-card'
import { Input } from '@/components/ui/input'
import { TakeInterface } from '@/types'

type FilterType = 'Date' | 'Title' | 'Random'

interface FilterState {
  isReversed: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10
    }
  }
}

interface TakesGalleryProps {
  initialTakes: TakeInterface[]
}

export const TakesGallery: React.FC<TakesGalleryProps> = ({ initialTakes }) => {
  const [takes] = useState<TakeInterface[]>(initialTakes)
  const [activeFilter, setActiveFilter] = useState<FilterType>('Date')
  const [filterStates, setFilterStates] = useState<
    Record<FilterType, FilterState>
  >({
    Date: { isReversed: false },
    Title: { isReversed: false },
    Random: { isReversed: false }
  })
  const [searchQuery, setSearchQuery] = useState('')

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
    [activeFilter, setFilterStates, setActiveFilter]
  )

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value)
    },
    []
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

  const getFilterLabel = useCallback(
    (filterType: FilterType): string => {
      const { isReversed } = filterStates[filterType]
      switch (filterType) {
        case 'Date':
          return isReversed ? 'Oldest' : 'Newest'
        case 'Title':
          return isReversed ? 'Title (Z-A)' : 'Title (A-Z)'
        case 'Random':
          return 'Random'
      }
    },
    [filterStates]
  )

  return (
    <main className="z-10 flex w-full max-w-6xl flex-col space-y-16 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-row flex-wrap items-center justify-start gap-5 rounded-[32px] border border-border bg-background p-3">
          {(['Date', 'Title', 'Random'] as FilterType[]).map(filterType => (
            <FilterButton
              key={filterType}
              label={getFilterLabel(filterType)}
              isActive={activeFilter === filterType}
              onClick={() => handleFilterChange(filterType)}
              isReversed={filterStates[filterType].isReversed}
            />
          ))}
        </div>
        <div className="flex items-center rounded-[32px] border border-border bg-background p-3 md:w-60">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="text-md h-12 rounded-[20px] border bg-transparent pr-10 leading-7 transition duration-300 ease-in-out"
            endIcon={<SearchIcon className="size-5 text-muted-foreground" />}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={
            activeFilter + filterStates[activeFilter].isReversed + searchQuery
          }
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3"
        >
          {filteredAndSortedTakes.length === 0 ? (
            <motion.p
              variants={itemVariants}
              className="col-span-full text-center text-muted-foreground md:w-[1152px]"
            >
              No takes found.
            </motion.p>
          ) : (
            filteredAndSortedTakes.map(take => (
              <motion.div key={take._id} variants={itemVariants} layout>
                <GalleryCard take={take} />
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
