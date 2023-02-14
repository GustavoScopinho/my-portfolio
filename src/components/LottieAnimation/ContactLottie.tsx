import Lottie from 'react-lottie'
import ContactAnimation from '../../assets/contact-animate.json'

export const ContactLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation
  }
  return (
    <>
      <Lottie
        options={defaultOptions}
        width={450}
        height={500}
        style={{ pointerEvents: 'none' }}
      />
    </>
  )
}
