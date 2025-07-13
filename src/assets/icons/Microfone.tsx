import * as React from "react"

const Microfone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 12.733c0 3.328 2.86 6.095 6.476 6.095 3.615 0 6.475-2.767 6.475-6.095h1.5c0 3.988-3.204 7.201-7.225 7.56V23h-1.5v-2.707C7.204 19.934 4 16.72 4 12.733h1.5zM11.976 1a4.129 4.129 0 014.129 4.129v7.387l-.005.211a4.13 4.13 0 01-4.124 3.918l-.212-.006a4.129 4.129 0 01-3.911-3.912l-.006-.211V5.129A4.13 4.13 0 0111.976 1zm0 1.5a2.63 2.63 0 00-2.63 2.629v7.387a2.63 2.63 0 005.258 0V5.129A2.629 2.629 0 0011.976 2.5z"
        fill="#007AFF"
      />
    </svg>
  )
}

export default Microfone
