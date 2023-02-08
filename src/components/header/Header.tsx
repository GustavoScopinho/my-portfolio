import { ContainerHeader } from './Header.styled'
import ImgGradient from '../../assets/Gradient-1.png'

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <img src={ImgGradient} alt="" />
        <p>Sobre</p>
        <p>Skills</p>
        <p>Projetos</p>
        <p>Contato</p>
      </ContainerHeader>
    </>
  )
}
