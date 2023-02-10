import React from 'react'
import { Person } from '../LottieAnimation/Person'
import {
  Container,
  ContainerImage,
  ContainerTec,
  ContainerText,
  Title
} from './Technology.styled'

export const Technology = () => {
  return (
    <>
      <Container>
        <Title>
          <h1>
            <span>T</span>ecnologias <span>:</span>
          </h1>
        </Title>
        <ContainerTec>
          <ContainerText>
            <p>• Javascript, Typescript</p>
            <p>
              • React.js (Utilizando Redux e Context como gerenciador de estado)
            </p>
            <p>• HTML5, CSS3, SASS/SCSS e Style-Components</p>
            <p>
              • Bibliotecas de estilo, como Material UI, Tailwind e Bootstrap.
            </p>
            <p>• Teste com Jest e React Library</p>
            <p>• Docker</p>
            <p>• Git/Github </p>
            <p>• Metodologias Ágeis como Scrum e Kanban</p>
          </ContainerText>
          <ContainerImage>
            <Person />
          </ContainerImage>
        </ContainerTec>
      </Container>
    </>
  )
}
