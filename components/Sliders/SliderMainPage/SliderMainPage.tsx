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
import Link from "next/link";

export function SliderMainPage() {
  return (
    <SliderContainer>
      <SwiperSlide>
        <Link href="/products?category=Household%20Assistants">
          <Image src={photo1} alt="slider" priority sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=Security+%26+Defense">
          <Image src={photo2} alt="slider" sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=Childcare+%26+Education">
          <Image src={photo3} alt="slider" sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=Customer+Service">
          <Image src={photo4} alt="slider" sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=Entertainment">
          <Image src={photo5} alt="slider" sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/products?category=Sport">
          <Image src={photo6} alt="slider" sizes="100vw" quality={100} />
        </Link>
      </SwiperSlide>
    </SliderContainer>
  )
}
