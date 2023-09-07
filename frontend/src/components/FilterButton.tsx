import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg'
import { toRanges } from '../utils/filters'
import { ui } from '../utils/uiStrings'

interface Props {
  activeFilters: number[]
  toggleOpen: (open: boolean) => void
  isOpen: boolean
}
const FilterButton = ({ activeFilters, toggleOpen, isOpen }: Props): React.ReactElement => {
  const hasActiveFilters = activeFilters.length > 0

  return (
    <button
      aria-controls="filters"
      className="flex items-center pl-2 focus-outline outline-offset-4 group"
      aria-expanded={isOpen}
      onClick={(): void => toggleOpen(!isOpen)}
    >
      <span className="uppercase font-bold text-xs mr-4">{isOpen ? ui.hideFilter : ui.filterBy}</span>
      {hasActiveFilters && !isOpen && (
        <div className="relative border-2 border-grey-2 rounded-full flex items-center pr-8 py-0.5">
          <p className="pl-2.5 pr-1.5 font-bold">{toRanges(activeFilters)}</p>
          <div className="absolute right-0 rounded-full ring-2 ring-grey-2 bg-white p-1 w-7 h-7 flex items-center justify-center transition-transform group-hover:scale-110">
            <FilterIcon className="text-black" />
          </div>
        </div>
      )}
      {((!hasActiveFilters && !isOpen) || isOpen) && (
        <div className="rounded-full border-2 border-grey-2 p-1.5 transition-transform group-hover:scale-110">
          <FilterIcon className="text-grey-2" />
        </div>
      )}
    </button>
  )
}

export default FilterButton
