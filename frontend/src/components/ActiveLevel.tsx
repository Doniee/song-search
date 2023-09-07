interface Props {
  level: number
}

const ActiveLevel = ({ level }: Props): React.ReactElement => {
  return (
    <span className="rounded-full bg-grey-2 font-bold text-white w-8 h-8 flex items-center justify-center">{level}</span>
  )
}

export default ActiveLevel
