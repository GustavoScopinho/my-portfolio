import { useState, useEffect } from 'react'
import ImgFoguete from '../../assets/foguete.png'
import { Container } from './StickerFoguete.styled'
import Fade, { Reveal, Zoom } from 'react-awesome-reveal'

export const StickerFoguete = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <Container>
        {backToTopButton && (
          <Fade>
            <img src={ImgFoguete} alt="" onClick={scrollUp} />
          </Fade>
        )}
      </Container>
    </>
  )
}
