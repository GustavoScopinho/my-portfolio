import RockImg from '../../assets/rock.png'
import { Container } from './Rock.styled'

export const Rock = () => {
  const numberRock = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <Container>
        {numberRock.map(i => {
          return <img key={i} src={RockImg} alt="" />
        })}
      </Container>
    </>
  )
}
