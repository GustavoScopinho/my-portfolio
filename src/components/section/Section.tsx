import {
  ButtonSC,
  Container,
  ContainerBlur,
  ContainerImagem,
  ContainerText
} from './Section.styled'
import Astronaut from '../../assets/img-gu.png'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`

export const Section = () => {
  return (
    <>
      <Container>
        <ContainerText>
          <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
            <h1>Gustavo Scopinho</h1>
          </Reveal>
          <Reveal keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
            <h2>Desenvolvedor </h2>
            <h3>Front-end</h3>
          </Reveal>

          <Reveal keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
            <ButtonSC>
              <a href="https://www.linkedin.com/in/gustavo-scopinho/">
                LINKEDIN
              </a>
            </ButtonSC>
          </Reveal>
        </ContainerText>
        <ContainerImagem>
          <img src={Astronaut} alt="" />

          <ContainerBlur />
        </ContainerImagem>
      </Container>
    </>
  )
}
