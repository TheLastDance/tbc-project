"use client"
import "./SliderContainer.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Keyboard, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';

export function SliderContainer({ children }: ChildrenProps) {
  return (
    <section className="slider_container">
      <Swiper
        loop
        autoplay={{ delay: 6000 }}
        speed={600}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, A11y, Autoplay]}
      >
        {children}
      </Swiper>
    </section>
  )
}
