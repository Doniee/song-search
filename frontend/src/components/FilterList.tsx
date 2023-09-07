import cn from 'classnames'

import { LevelFilter } from '../utils/types'
import { ui } from '../utils/uiStrings'
import ActiveLevel from './ActiveLevel'
import Level from './Level'

interface Props {
  levelFilters: LevelFilter[]
  updateFilters: (level: number, active: boolean) => void
  isOpen: boolean
}
const FilterList = ({ levelFilters, updateFilters, isOpen }: Props): React.ReactElement => {
  return (
    <div
      aria-hidden={!isOpen}
      id="filters"
      className={cn(
        'w-60 xs:w-80 sm:w-full gap-5 xs:gap-2 md:gap-4 lg:gap-5 flex flex-wrap justify-center sm:justify-end mx-auto mt-6 mb-3 sm:mb-6',
        {
          hidden: !isOpen,
        }
      )}
    >
      {levelFilters.map((item) => (
        <button
          className={cn(
            'w-8 h-8 flex items-center justify-center hover:scale-125 transition-all focus-outline focus-visible:outline-offset-4'
          )}
          key={item.level}
          onClick={(): void => updateFilters(item.level, !item.active)}
          aria-pressed={item.active}
          aria-label={`${ui.filter} ${ui.level} ${item.level}`}
        >
          {item.active ? <ActiveLevel level={item.level} /> : <Level level={item.level} id={item.level.toString()} />}
        </button>
      ))}
    </div>
  )
}

export default FilterList
