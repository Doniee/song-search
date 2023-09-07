import { ui } from '../utils/uiStrings'
import Search from './Search'

interface Props {
  setQuery: (query: string) => void
}

const Header = ({ setQuery }: Props): React.ReactElement => {
  return (
    <header className="h-64 sm:h-72 w-full relative overflow-hidden">
      <picture>
        <source media="(max-width: 320px)" srcSet="./src/assets/hero-mobile.jpg" />
        <source media="(min-width: 321px)" srcSet="./src/assets/hero.jpg" />
        <img className="absolute object-cover min-h-full min-w-full" src="./src/assets/hero.jpg" alt="" />
      </picture>
      <div className="h-full flex items-center">
        <div className="w-full z-10 relative px-2 xs:px-4 text-center text-white flex flex-col items-center">
          <h1 className="font-bold uppercase mb-4 sm:mt-2 leading-6 text-xl sm:text-2xl md:text-4xl tracking-wider">
            {ui.heading}
          </h1>
          <p className="font-light text-base leading-5 px-4 mb-6 sm:mb-8">{ui.subHeading}</p>
          <Search setQuery={(query): void => setQuery(query)} />
        </div>
      </div>
    </header>
  )
}

export default Header
