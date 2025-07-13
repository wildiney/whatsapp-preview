import * as React from "react"

const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M13.646 2.25A2.75 2.75 0 0116.2 3.979l.309.771H18a4.75 4.75 0 014.75 4.75v7A4.75 4.75 0 0118 21.25H6a4.75 4.75 0 01-4.75-4.75v-7A4.75 4.75 0 016 4.75h1.492l.309-.771a2.75 2.75 0 012.553-1.729h3.293zm-3.292 1.5c-.51 0-.97.312-1.16.786l-.498 1.242A.75.75 0 018 6.25H6A3.25 3.25 0 002.75 9.5v7A3.25 3.25 0 006 19.75h12a3.25 3.25 0 003.25-3.25v-7A3.25 3.25 0 0018 6.25h-2a.75.75 0 01-.696-.472l-.497-1.242a1.25 1.25 0 00-1.16-.786h-3.293zM12 7.25a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill="#007AFF"
      />
    </svg>
  )
}

export default CameraIcon
