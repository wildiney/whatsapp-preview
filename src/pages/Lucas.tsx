import PhoneFrame from '../components/PhoneFrame'
import WhatsAppHeader from '../components/WhatsApp/Header'
import DateDivisor from '../components/WhatsApp/DateDivisor'
import MessageBalloon from '../components/WhatsApp/Balloon'
import BottomBar from '../components/WhatsApp/BottomBar'
import Background from '../assets/bg-whatsapp.png'

import AmandaAudio from '../assets/audios/amanda.mp3'
import LucasAudio from '../assets/audios/lucas.mp3'
import AmandaPicture from '../assets/pictures/amanda.png'
import LucasPicture from '../assets/pictures/lucas.png'


function Lucas () {
  return (
    <PhoneFrame>
      <WhatsAppHeader picture={LucasPicture} name="Lucas" linkTo="/fernanda" />

      {/* content */}
      <div className='w-auto flex-1 mx-2 p-6' style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}>
        <DateDivisor />
        <MessageBalloon from="guest" audio={AmandaAudio} picture={AmandaPicture} />
        <MessageBalloon from="me" audio={LucasAudio} picture={LucasPicture} />
      </div>
      <BottomBar />
    </PhoneFrame>
  )
}

export default Lucas