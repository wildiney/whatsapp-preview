import PlayIcon from '../../../assets/icons/Play';
import AudioSpecter from '../../../assets/icons/Audio';

function MessageBalloon ({ from, audio, picture }: { from: string, audio: string, picture: string }) {
  let background = '';
  let position = '';
  let justify = '';

  if (from == 'guest') {
    background = "bg-bg-message-received"
    position = 'left-[-7px]'
    justify = 'justify-start'
  } else {
    background = "bg-green-950"
    position = "right-[-7px]"
    justify = 'justify-end'
  }

  const handleClick = () => {
    const audioFile = new Audio(audio)
    audioFile.play()
  }

  return (
    <div className={`flex w-full ${justify} mb-6`}>
      <div className={`${background} max-w-10/12 rounded-xl relative ml-1`}>
        <div className={`absolute overflow-hidden w-3 aspect-square rotate-45 ${background} ${position} bottom-3`}>&nbsp;</div>
        <div className='flex flex-col p-4 gap-3 z-50 w-full grow'>
          <button className="flex flex-row justify-between items-center hover:cursor-pointer" onClick={() => console.log("çlicked")}>
            <PlayIcon className="w-6 h-6 mr-2" onClick={handleClick} />
            <AudioSpecter className='mr-2' />
            <div className='bg-white rounded-full w-8 h-8 overflow-hidden aspect-square'>
              {picture && <img src={picture} className='w-8 aspect-square' />}
            </div>
          </button>
          <div className='text-xs text-green-600'>Transcribe</div>
        </div>
      </div>
    </div>
  )
}

export default MessageBalloon