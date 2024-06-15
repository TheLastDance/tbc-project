"use client"
import Image from "next/image"
import { useState } from "react"

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  fill,
  priority,
  sizes,
  width,
  height,
  ...props }: IImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };


  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      fill={fill}
      priority={priority}
      sizes={sizes}
      width={width}
      height={height}
      {...props}
    />
  )
}
