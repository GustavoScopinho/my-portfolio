import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import GifEcommerceGS from '../../assets/gs-ecommerce.gif'
import GifApiPessoa from '../../assets/api-pessoa.gif'
import { Container } from './Slide.styled'
import 'swiper/swiper-bundle.min.css'

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
            <img src={GifApiPessoa} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifEcommerceGS} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={GifApiPessoa} alt="" />
          </SwiperSlide>
          ...
        </Swiper>
      </Container>
    </>
  )
}
