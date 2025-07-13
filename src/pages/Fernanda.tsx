import PhoneFrame from '../components/PhoneFrame'
import WhatsAppHeader from '../components/WhatsApp/Header'
import DateDivisor from '../components/WhatsApp/DateDivisor'
import MessageBalloon from '../components/WhatsApp/Balloon'
import BottomBar from '../components/WhatsApp/BottomBar'
import Background from '../assets/bg-whatsapp.png'

import FernandaAudio from '../assets/audios/fernanda.mp3'
import FernandaPicture from '../assets/pictures/fernanda.png'


function Lucas () {
  return (
    <PhoneFrame>
      <WhatsAppHeader picture={FernandaPicture} name="Fernanda" linkTo="/lucas" />

      {/* content */}
      <div className='w-auto flex-1 mx-2 p-6' style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}>
        <DateDivisor />
        <MessageBalloon from="guest" audio={FernandaAudio} picture={FernandaPicture} />
        {/* <MessageBalloon from="me" audio={LucasAudio} picture={LucasPicture} /> */}
      </div>
      <BottomBar />
    </PhoneFrame>
  )
}

export default Lucas