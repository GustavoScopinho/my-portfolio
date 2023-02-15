import Lottie from 'react-lottie'
import Error404 from '../../assets/error404.json'

export const ErrorLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Error404
  }
  return (
    <>
      <Lottie
        options={defaultOptions}
        width={'90%'}
        height={'90%'}
        style={{ pointerEvents: 'none' }}
      />
    </>
  )
}
