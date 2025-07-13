import * as React from "react"

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={11}
      height={14}
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 14V0l11 7-11 7z" fill="#DED8E1" />
    </svg>
  )
}

export default PlayIcon
