import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import Header from './components/Header'
import Songs from './components/Songs'
import { initialFilters } from './utils/filters'
import { LevelFilter } from './utils/types'
import { getFormattedQuery } from './utils/utils'

const App = (): React.ReactElement => {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<number[]>([])
  const [levelFilters, setLevelFilters] = useState<LevelFilter[]>(initialFilters)

  const updateFilters = (level: number, active: boolean): void => {
    const updatedFilters = levelFilters.map((item) => {
      const filter = item.level === level ? { level: level, active: active } : item
      return filter
    })
    setLevelFilters(updatedFilters)
  }

  useEffect(() => {
    const active = levelFilters.filter((item) => item.active)
    const activeLevels = active.map((filter) => filter.level)
    setActiveFilters(activeLevels)
  }, [levelFilters])

  return (
    <div className="flex-1 w-full bg-white text-grey-2">
      <Header setQuery={(query): void => setQuery(query)} />
      <main className="flex flex-col items-center pb-20">
        <div className="w-full max-w-4xl">
          <Filter
            activeFilters={activeFilters}
            levelFilters={levelFilters}
            updateFilters={(level, active): void => updateFilters(level, active)}
          />
          <Songs query={getFormattedQuery(query, activeFilters)} />
        </div>
      </main>
    </div>
  )
}

export default App
