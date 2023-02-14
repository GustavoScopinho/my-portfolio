import { ContainerHeader } from './Header.styled'
import ImgGradient from '../../assets/Gradient-1.png'

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <img src={ImgGradient} alt="Logo cartoon" />
        <a href="#about">Sobre mim</a>
        <a href="#technology">Tecnologias</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </ContainerHeader>
    </>
  )
}
