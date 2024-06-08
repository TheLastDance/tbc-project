"use client"

import Lottie from 'react-lottie';
import Person from "./Person.json";

export function PersonLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Person,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={100}
      width={100}
    />
  )
}