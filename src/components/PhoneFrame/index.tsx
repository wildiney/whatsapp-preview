import StatusBar from "../StatusBar";
import Frame from '../../assets/iphone-frame.png'
import type { ReactNode } from "react";


function PhoneFrame ({ children }: { children: ReactNode }) {
  return (
    <div className='w-[450px] h-[920px] relative'>
      <div className='absolute top-0 w-[450px] h-[900px] overflow-hidden px-3 pt-3 flex flex-col rounded-[100px]'>
        <StatusBar />
        {children}
      </div>
      <img src={Frame} className='absolute top-0 pointer-events-none' width={450} height={950} />
    </div>
  )
}

export default PhoneFrame