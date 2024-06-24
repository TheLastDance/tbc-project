"use client"
import "./GallerySlider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, A11y } from 'swiper/modules';
import Image from "next/image";

export function GallerySlider({ images, initialSlide }: { images: string[], initialSlide: number }) {
  return (
    <div className="gallerySlider_container">
      <Swiper
        loop
        initialSlide={initialSlide}
        keyboard={{ enabled: true }}
        navigation={true}
        a11y={{
          prevSlideMessage: "",
          nextSlideMessage: "",
          lastSlideMessage: "",
          firstSlideMessage: "",
        }}
        modules={[Keyboard, Navigation, A11y]}
      >
        {images.map((item, index) => <SwiperSlide key={index}>
          <Image src={item} alt="product" sizes="1000px" fill />
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}
