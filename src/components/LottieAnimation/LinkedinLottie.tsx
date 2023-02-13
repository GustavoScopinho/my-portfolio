import Lottie from 'react-lottie'
import LinkedinIcon from '../../assets/linkedin-icon.json'

export const LinkedinLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LinkedinIcon
  }
  return (
    <>
      <Lottie options={defaultOptions} width={70} />
    </>
  )
}
