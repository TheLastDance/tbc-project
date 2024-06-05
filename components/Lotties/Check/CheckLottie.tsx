"use client"

import Lottie from 'react-lottie';
import Check from "./Check.json";

export function CheckLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Check,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={280}
      width={280}
    />
  )
}
