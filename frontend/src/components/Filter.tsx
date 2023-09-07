import { useState } from 'react'

import { LevelFilter } from '../utils/types'
import FilterButton from './FilterButton'
import FilterList from './FilterList'

interface Props {
  levelFilters: LevelFilter[]
  updateFilters: (level: number, active: boolean) => void
  activeFilters: number[]
}
const Filter = ({ levelFilters, updateFilters, activeFilters }: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col items-end py-3 px-2 md:px-4">
      <FilterButton activeFilters={activeFilters} toggleOpen={(isOpen): void => setIsOpen(isOpen)} isOpen={isOpen} />
      <FilterList levelFilters={levelFilters} isOpen={isOpen} updateFilters={updateFilters} />
    </div>
  )
}

export default Filter
