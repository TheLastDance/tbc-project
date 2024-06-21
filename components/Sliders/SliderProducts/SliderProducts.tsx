"use client"
import { SliderContainer } from "../SliderContainer/SliderContainer"
import { SwiperSlide } from 'swiper/react';
import Image from "next/image";
import photo1 from "@/public/img/Static slider/1.jpeg"
import photo2 from "@/public/img/Static slider/2.jpeg";
import photo3 from "@/public/img/Static slider/3.jpeg"
import photo4 from "@/public/img/Static slider/4.jpeg";
import photo5 from "@/public/img/Static slider/5.jpeg";
import photo6 from "@/public/img/Static slider/6.jpeg";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export default function SliderProducts() {
  return (
    <SliderContainer>
      <SwiperSlide>
        <Image src={photo1} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.1" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.1" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo2} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.2" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.2" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo3} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.3" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.3" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo4} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.4" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.4" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo5} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.5" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.5" />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={photo6} alt="slider" priority sizes="100vw" quality={100} placeholder="blur" />
        <div className="slider_content">
          <h3>
            <TranslateText translationKey="slider.heading.6" />
          </h3>
          <p>
            <TranslateText translationKey="slider.body.6" />
          </p>
        </div>
      </SwiperSlide>
    </SliderContainer>
  )
}
