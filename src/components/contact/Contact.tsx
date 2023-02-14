import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { BoxTitle } from '../boxTitle/BoxTitle'
import { ContactLottie } from '../LottieAnimation/ContactLottie'
import { EmailLottie } from '../LottieAnimation/EmailLottie'
import { LinkedinLottie } from '../LottieAnimation/LinkedinLottie'
import {
  Box,
  Container,
  ContainerContent,
  ContainerText
} from './Contact.styled'

export const Contact = () => {
  return (
    <>
      <Container id="contact">
        <BoxTitle title="Contato" />
        <ContainerContent>
          <div>
            <Fade direction="left" delay={400} duration={600} triggerOnce>
              <ContactLottie />
            </Fade>
          </div>

          <ContainerText>
            <Fade direction="right" delay={400} duration={600} triggerOnce>
              <h1>Entre em contato via:</h1>
              <Box>
                <div>
                  <LinkedinLottie />
                </div>
                <p>/in/gustavo-scopinho/</p>
              </Box>
            </Fade>
            <Box>
              <Fade direction="right" delay={650} duration={600} triggerOnce>
                <div>
                  <EmailLottie />
                </div>
                <p>guh.fs@hotmail.com</p>
              </Fade>
            </Box>
          </ContainerText>
        </ContainerContent>
      </Container>
    </>
  )
}
