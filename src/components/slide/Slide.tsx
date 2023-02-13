import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from './Slide.styled'
import 'swiper/swiper-bundle.min.css'
import { EcommerceLol } from '../projectContent/EcommerceLol'
import { AdminPanel } from '../projectContent/AdminPanel'
import { EcommerceGs } from '../projectContent/EcommerceGs'
import { EnzoFilmes } from '../projectContent/EnzoFilmes'
import { ApiPessoa } from '../projectContent/ApiPessoa'
import { GithubApi } from '../projectContent/GithubApi'

export const Slider = () => {
  return (
    <>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <EcommerceGs />
          </SwiperSlide>
          <SwiperSlide>
            <AdminPanel />
          </SwiperSlide>
          <SwiperSlide>
            <EcommerceLol />
          </SwiperSlide>
          <SwiperSlide>
            <EnzoFilmes />
          </SwiperSlide>
          <SwiperSlide>
            <ApiPessoa />
          </SwiperSlide>
          <SwiperSlide>
            <GithubApi />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  )
}
