import { Slider } from '../slide/Slide'
import { Container, ContainerText } from './Projects.styled'

export const Projects = () => {
  return (
    <>
      <Container id="projects">
        <ContainerText>
          <h1>Projetos</h1>
        </ContainerText>
        <Slider />
      </Container>
    </>
  )
}
