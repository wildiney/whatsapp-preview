import React from 'react'

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M12 3v18M3 12h18"
        stroke="#007AFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default PlusIcon
