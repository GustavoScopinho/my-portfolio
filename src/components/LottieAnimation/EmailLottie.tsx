import Lottie from 'react-lottie'
import EmailIcon from '../../assets/email-icon.json'

export const EmailLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmailIcon
  }
  return (
    <>
      <Lottie options={defaultOptions} width={70} />
    </>
  )
}
