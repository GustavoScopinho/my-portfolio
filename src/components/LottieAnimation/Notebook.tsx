import Lottie from 'react-lottie'
import NotebookLottie from '../../assets/computer.json'

export const Notebook = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotebookLottie
  }
  return (
    <>
      <Lottie
        options={defaultOptions}
        width={700}
        height={700}
        style={{ pointerEvents: 'none' }}
      />
    </>
  )
}
