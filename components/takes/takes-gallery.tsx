'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { SearchIcon } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

import { FilterButton } from '@/components/button/filter-button'
import { GalleryCard } from '@/components/card/gallery-card'
import { Input } from '@/components/ui/input'
import { useFilteredAndSortedTakes } from '@/hooks/useFilteredAndSortedTakes'
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
  const [activeFilter] = useState<FilterType>('Date')
  const [searchQuery, setSearchQuery] = useState('')

  const { filteredAndSortedTakes, filterStates, handleFilterChange } =
    useFilteredAndSortedTakes(initialTakes, activeFilter, searchQuery)

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value)
    },
    []
  )

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

  const filterButtons = useMemo(
    () =>
      ['Date', 'Title', 'Random'].map(filterType => (
        <FilterButton
          key={filterType}
          label={getFilterLabel(filterType as FilterType)}
          isActive={activeFilter === filterType}
          onClick={() => handleFilterChange(filterType as FilterType)}
          isReversed={filterStates[filterType as FilterType].isReversed}
        />
      )),
    [activeFilter, filterStates, getFilterLabel, handleFilterChange]
  )

  return (
    <main className="z-10 flex w-full max-w-6xl flex-col space-y-16 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-row flex-wrap items-center justify-start gap-5 rounded-[32px] border border-border bg-background p-3">
          {filterButtons}
        </div>
        <div className="flex w-full items-center rounded-[32px] border border-border bg-background p-3 md:w-60">
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
