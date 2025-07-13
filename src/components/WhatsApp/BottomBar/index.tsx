import PlusIcon from '../../../assets/icons/Plus'
import CameraIcon from '../../../assets/icons/Camera'
import Microfone from '../../../assets/icons/Microfone'

function BottomBar () {
  return (
    <div className='bg-black-500 h-20 w-auto mx-2 px-6 flex gap-4 items-start border-b-gray-400 pt-2'>
      <div className='flex h-11 items-center gap-2 flex-row w-full'>
        <button className="hover:cursor-pointer" onClick={() => console.log("çlicked")}>
          <PlusIcon className="w-6 h-6" />
        </button>
        <input className='flex h-8 w-full rounded-2xl border-2 border-gray-600  bg-gray-700' type='text' />
      </div>
      <div className='flex  h-11 gap-2 items-center'>
        <button className="hover:cursor-pointer" onClick={() => console.log("çlicked")}>
          <CameraIcon className="w-6 h-6" />
        </button>
        <button className="hover:cursor-pointer" onClick={() => console.log("çlicked")}>
          <Microfone className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default BottomBar