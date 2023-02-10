import Lottie from 'react-lottie'
import PersonDesk from '../../assets/computer.json'

export const Person = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PersonDesk
  }
  return (
    <>
      <Lottie options={defaultOptions} width={700} height={700} />
    </>
  )
}
