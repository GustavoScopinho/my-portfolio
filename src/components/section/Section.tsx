import React from 'react'
import {
  ButtonSC,
  Container,
  ContainerBlur,
  ContainerImagem,
  ContainerText
} from './Section.styled'
import Astronaut from '../../assets/img-gu.png'

export const Section = () => {
  return (
    <>
      <Container>
        <ContainerText>
          <h1>Gustavo Scopinho</h1>
          <h2>Desenvolvedor </h2>
          <h2>Front-end</h2>
          <ButtonSC>LINKEDIN</ButtonSC>
        </ContainerText>
        <ContainerImagem>
          <img src={Astronaut} alt="" />
          <ContainerBlur />
        </ContainerImagem>
      </Container>
    </>
  )
}
