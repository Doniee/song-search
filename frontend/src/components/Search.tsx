import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ui } from '../utils/uiStrings'

interface Props {
  setQuery: (query: string) => void
}

const Search = ({ setQuery }: Props): React.ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue] = useDebounce(inputValue, 500)

  useEffect(() => {
    setQuery(debouncedValue)
  }, [debouncedValue, setQuery])

  return (
    <form
      role="search"
      className="group rounded-full bg-white relative max-w-xl w-full border border-grey-1 hover:border-grey-2"
      onSubmit={(e): void => e.preventDefault()}
    >
      <label className="sr-only" htmlFor="search">
        {ui.searchLabel}
      </label>
      <input
        id="search"
        type="text"
        className="h-12 bg-transparent px-4 xs:px-7 w-full text-black rounded-full focus:outline-none focus-visible:ring-2 ring-inset ring-grey-2"
        placeholder={ui.searchLabel}
        onChange={(e): void => setInputValue(e.target.value)}
      />
      <div className="absolute right-0 top-0 flex items-center h-full pl-3 pr-3 xs:pr-7">
        <SearchIcon aria-hidden="true" className="group-hover:scale-125 transition-all" />
      </div>
    </form>
  )
}

export default Search
