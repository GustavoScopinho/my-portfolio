import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from './Slide.styled'
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
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={GifEcommerceGS} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifAdminCrud} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifEcommerceLol} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifTopFilmes} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifApiPessoa} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifGithubApi} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}
