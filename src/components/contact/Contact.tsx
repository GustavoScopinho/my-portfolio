import React from 'react'
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
      <Container>
        <BoxTitle title="Contato" />
        <ContainerContent>
          <div>
            {' '}
            <ContactLottie />
          </div>
          <ContainerText>
            <h1>Entre em contato via:</h1>
            <Box>
              <div>
                <LinkedinLottie />
              </div>
              <p>/in/gustavo-scopinho/</p>
            </Box>
            <Box>
              <div>
                <EmailLottie />
              </div>
              <p>guh.fs@hotmail.com</p>
            </Box>
          </ContainerText>
        </ContainerContent>
      </Container>
    </>
  )
}
