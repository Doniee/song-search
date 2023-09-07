import cn from 'classnames'

import LoadingIndicator from './LoadingIndicator'

interface Props {
  className?: string
  message: string
  retrying?: boolean
  fixed?: boolean
}

const Alert = ({ className, message, retrying, fixed }: Props): React.ReactElement => {
  return (
    <div
      role="alert"
      className={cn('bg-white z-20 p-4 flex flex-col items-center text-center', className, {
        'w-full bottom-0 left-0 fixed border-t-2 border-t-red py-6': fixed,
        'border border-red rounded-lg': !fixed,
      })}
    >
      <p>{message}</p>
      {retrying && <LoadingIndicator className="mt-3" />}
    </div>
  )
}

export default Alert
