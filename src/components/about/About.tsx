import React from 'react'
import {
  Container,
  ContainerAbout,
  ContainerImage,
  ContainerLottie,
  ContainerText,
  Content
} from './About.styled'
import ImgGu from '../../assets/gu-profile.png'
import { Wave } from '../wave/Wave'
import { Foguete } from '../LottieAnimation/Foguete'
import { WavesOpacity } from '../wavesOpacity/WavesOpacity'
import { Rock } from '../rock/Rock'

export const About = () => {
  return (
    <>
      <Container>
        {/* <ContainerLottie>
          <Foguete />
        </ContainerLottie> */}
        <Content>
          <ContainerImage>
            <img src={ImgGu} alt="" />
          </ContainerImage>
          <ContainerAbout>
            <h1>
              Sobre <span>mim</span>
            </h1>
            <ContainerText>
              <p>
                Olá, sou o Gustavo e sou Desenvolvedor Front-End com um ano de
                experiência, atualmente trabalhando com a biblioteca React.js.
                Sou uma pessoa que gosta de adquirir e compartilhar
                conhecimentos sendo hard skills ou soft skills, atualmente estou
                cursando Análise e Desenvolvimento de Sistemas.{' '}
              </p>
              <p>
                Como desenvolvedor, entendo a importância de criar interfaces de
                usuário atraentes e funcionais, e por isso gosto de trabalhar em
                colaboração com designers para alcançar esses objetivos. Além
                disso, tenho experiência trabalhando em equipe com
                desenvolvedores back-end para garantir que as soluções
                desenvolvidas sejam eficientes.
              </p>
            </ContainerText>
          </ContainerAbout>
        </Content>
      </Container>
      {/* <WavesOpacity /> */}
      <Rock />
    </>
  )
}
