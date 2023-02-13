import { Slider } from '../slide/Slide'
import { Container, ContainerText } from './Projects.styled'

export const Projects = () => {
  return (
    <>
      <Container>
        <ContainerText>
          <h1>Projetos</h1>
        </ContainerText>
        <Slider />
      </Container>
    </>
  )
}
