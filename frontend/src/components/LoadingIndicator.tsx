import cn from 'classnames'

import { ui } from '../utils/uiStrings'

interface Props {
  className?: string
}

const LoadingIndicator = ({ className }: Props): React.ReactElement => {
  return (
    <div className={cn('flex justify-center h-full w-full items-center gap-3 py-2', className)}>
      <span className="sr-only">{ui.loading}</span>
      <span className="loading-dot" />
      <span className="loading-dot" />
      <span className="loading-dot" />
    </div>
  )
}

export default LoadingIndicator
