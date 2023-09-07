import resolveConfig from 'tailwindcss/resolveConfig'

import config from '../../tailwind.config'
import { getColor, getDegree } from '../utils/filters'
import { ui } from '../utils/uiStrings'
import LevelGradient from './LevelGradient'

interface Props {
  level: number
  id: string
}

const Level = ({ level, id }: Props): React.ReactElement => {
  const tailwindConfig = resolveConfig(config)
  const colors = tailwindConfig.theme?.colors

  return (
    <span className="flex w-8 items-center justify-center relative">
      <svg viewBox="-5 -5 110 110" className="absolute" role="img" aria-labelledby={`level-${id}`}>
        <title id={`level-${id}`}>{`${ui.level} ${level}`}</title>
        <foreignObject x="0" y="0" width="100" height="100">
          <LevelGradient color={getColor(level)} degree={getDegree(level, 15)} bgColor={colors.grey[2]} />
        </foreignObject>
        <g className="mix-blend-lighten">
          <circle cx="50" cy="50" r="55" fill="white" />
          <path
            d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
            stroke="black"
            strokeWidth="8"
            fill="none"
            strokeDasharray="75 20"
            strokeLinecap="round"
            strokeDashoffset="36"
          />
        </g>
      </svg>
      <p aria-hidden className="z-10 font-bold text-sm">
        {level}
      </p>
    </span>
  )
}

export default Level
