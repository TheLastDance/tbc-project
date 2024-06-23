"use client"

import "./Gallery.css";
import { useState } from "react";
import Image from "next/image";
import { ModalPortal } from "../Modals/ModalPortal/ModalPortal";
import { Close } from "../Icons/Close";
import { AnimatePresence } from "framer-motion";
import { GallerySlider } from "../Sliders/GallerySlider/GallerySlider";
import { useToggle } from "@/services/hooks/useToggle";

interface IProps {
  images: string[],
}

export function Gallery({ images }: IProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  const handleChangePhoto = (index: number) => {
    setImgIndex(index);
  }

  return (
    <div className="gallery_container">
      <div className="galleryColumn">
        {images.map((item, idx) =>
          <button type="button" key={idx} className="resetButtonStyles" onClick={() => handleChangePhoto(idx)}>
            <Image
              src={item}
              alt="product"
              width={500}
              height={700}
            />
          </button>)
        }
      </div>
      <button type="button" className="resetButtonStyles thumbnail_button" onClick={setToggleTrue}>
        <div className="thumbnail" >
          <Image src={images[imgIndex]} sizes="20rem" alt="product" fill quality={100} />
        </div>
      </button>
      <AnimatePresence>
        {toggle && <ModalPortal onClose={setToggleFalse}>
          <div className="thumbnailModal">
            <button type="button" className="resetButtonStyles" title="close" onClick={setToggleFalse}>
              <Close />
            </button>
            <GallerySlider images={images} initialSlide={imgIndex} />
            {/* <Image src={images[img]} alt="product" width={700} height={1000} /> */}
          </div>
        </ModalPortal>}
      </AnimatePresence>
    </div>
  )
}
