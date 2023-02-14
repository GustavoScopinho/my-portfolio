import { Wave } from '../wave/Wave'
import { Container, Text } from './Footer.styled'

export const Footer = () => {
  return (
    <>
      <Container>
        <Wave />
        <Text>
          <p>&copy 2023 Copyright - Programador Gustavo Scopinho</p>
        </Text>
      </Container>
    </>
  )
}
