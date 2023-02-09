import React from 'react'
import Lottie from 'react-lottie'
import FogueteAnimation from '../../assets/foguete.json'

export const Foguete = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FogueteAnimation
  }
  return (
    <>
      <Lottie options={defaultOptions} width={150} height={150} />
    </>
  )
}
