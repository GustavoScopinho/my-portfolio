import {
  Container,
  ContainerAbout,
  ContainerImage,
  ContainerText,
  Content
} from './About.styled'
import ImgGu from '../../assets/gu-profile.png'
import { Fade } from 'react-awesome-reveal'
import { Rock } from '../rock/Rock'

export const About = () => {
  return (
    <>
      <Container id="about">
        <Content>
          <ContainerImage>
            <Fade direction="left" delay={400} duration={600} triggerOnce>
              <img src={ImgGu} alt="" />
            </Fade>
          </ContainerImage>
          <ContainerAbout>
            <Fade direction="right" delay={500} duration={600} triggerOnce>
              <h1>
                Sobre <span>mim</span>
              </h1>

              <ContainerText>
                <p>
                  Olá, sou o Gustavo e sou Desenvolvedor Front-End com um ano de
                  experiência, atualmente trabalhando com a biblioteca React.js.
                  Sou uma pessoa que gosta de adquirir e compartilhar
                  conhecimentos sendo hard skills ou soft skills, atualmente
                  estou cursando Análise e Desenvolvimento de Sistemas.{' '}
                </p>
              </ContainerText>
            </Fade>
          </ContainerAbout>
        </Content>
      </Container>
      <Rock />
    </>
  )
}
