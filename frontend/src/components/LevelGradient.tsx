interface Props {
  color: string
  degree: number
  bgColor: string
}

const LevelGradient = ({ color, degree, bgColor }: Props): React.ReactElement => {
  return (
    <div
      style={{ background: `conic-gradient(${color} ${degree}deg, ${bgColor} ${degree}deg)` }}
      className="w-full h-full rounded-[50%]"
    />
  )
}

export default LevelGradient
