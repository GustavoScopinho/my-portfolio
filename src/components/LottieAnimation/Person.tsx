import React from 'react'
import Lottie from 'react-lottie'
import PersonDesk from '../../assets/person-at-desk.json'

export const Person = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PersonDesk
  }
  return (
    <>
      <Lottie options={defaultOptions} width={800} height={500} />
    </>
  )
}
