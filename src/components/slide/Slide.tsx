import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container, ContainerText } from './Slide.styled'
import 'swiper/swiper-bundle.min.css'

import GifEcommerceGS from '../../assets/gifs/gs-ecommerce.gif'
import GifApiPessoa from '../../assets/gifs/api-pessoa.gif'
import GifTopFilmes from '../../assets/gifs/topfilmes.gif'
import GifEcommerceLol from '../../assets/gifs/ecommercelol.gif'
import GifAdminCrud from '../../assets/gifs/admincrud.gif'
import GifGithubApi from '../../assets/gifs/githubapi.gif'

export const Slider = () => {
  return (
    <>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={GifEcommerceGS} alt="" />
            <ContainerText>
              <h3>E-commerce GS</h3>
              <p>
                O projeto consiste em um e-commerce onde será possível adicionar
                ao carrinho os produtos sendo uma quantidade ou mais e simular
                uma compra.
              </p>
              <p>
                Tecnologias utilizadas: React.js • Typescript • Material-UI •
                Requisição de API (Redux Toolkit)
              </p>
            </ContainerText>
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifAdminCrud} alt="" />
            <ContainerText>
              <h3>Admin Panel - CRUD</h3>
              <p>
                Projeto de um CRUD consumindo api de usuários, contendo lista de
                usuários, podendo adicionar um novo, editar ou até deletar.
              </p>
              <p>
                Tecnologias utilizadas: React.js • Typescript • Requisição de
                API (Context)
              </p>
            </ContainerText>
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifEcommerceLol} alt="" />
            <ContainerText>
              <h3>E-commerce League of Legends</h3>
              <p>
                O projeto consiste em um e-commerce onde será possível favoritar
                uma skin, adicionar ao carrinho as compras e simular uma compra.
              </p>
              <p>
                Tecnologias utilizadas: React.js • Javascript • Redux Toolkit
              </p>
            </ContainerText>
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifTopFilmes} alt="" />
            <ContainerText>
              <h3>Enzo Filmes</h3>
              <p>
                O projeto consiste em um site de filmes/séries podendo enviar
                sugestões.
              </p>
              <p>Tecnologias utilizadas: React.js • Javascript</p>
            </ContainerText>
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifApiPessoa} alt="" />
            <ContainerText>
              <h3>Aplicação Gestão de Pessoas</h3>
              <p>
                Aplicação consumindo api de usuários, contendo página de login,
                cadastro, logout e lista de usuários, podendo adicionar uma nova
                pessoa, adicionar um contato ou endereço a ela, editar e
                deletar(CRUD).
              </p>
              <p>
                Tecnologias utilizadas: React.js • Typescript • Requisição de
                API (Context) • Login LocalStore(JWT)
              </p>
            </ContainerText>
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifGithubApi} alt="" />
            <ContainerText>
              <h3>Buscar usuário Github</h3>
              <p>
                A aplicação consiste em pesquisar um usuário do Github e assim
                mostrando os repositórios de forma dinâmica, podendo ser
                direcionado para o código apenas clicando em um repositório.
              </p>
              <p>
                Tecnologias utilizadas: React.js • Typescript • Requisição de
                API (Context) • Testing Library
              </p>
            </ContainerText>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}
