import { Link } from 'react-router-dom'

const WhatsAppHeader = ({ picture, name, linkTo }: { picture: string | null, name: string, linkTo: string }) => {
  return (
    <div className='bg-black-500 h-13 w-auto mx-2 px-4 flex gap-4 items-center '>

      <div className='flex items-center gap-2 h-full'>
        <Link className='h-full flex items-center flex-col justify-center' to={linkTo}>
          <span className='border-2 border-r-0 border-t-0 rotate-45 w-3 h-3 border-blue-500'></span>
        </Link>

        <span className='flex items-center h-9 text-blue-500 font-normal  text-base'>3</span>
      </div>

      <div className='flex gap-4 flex-row items-center'>
        <div className='rounded-4xl w-9 h-9 bg-white overflow-hidden'>
          {picture && <img src={picture} className="w-9 aspect-square" />}
        </div>
        <div className='flex flex-col'>
          <span className='text-white text-lg font-bold leading-5'>{name}</span>
          {/* <span className='text-sm leading-4 text-gray-500'>typing... </span> */}
        </div>
      </div>

    </div>
  )
}

export default WhatsAppHeader