"use client"

import "./Gallery.css";
import { useState } from "react";
import Image from "next/image";
import { ModalPortal } from "../Modals/ModalPortal/ModalPortal";
import { Close } from "../Icons/Close";

interface IProps {
  images: string[],
}

export function Gallery({ images }: IProps) {
  const [img, setImg] = useState(images[0]);
  const [openModal, setOpenModal] = useState(false);

  const handleChangePhoto = (index: number) => {
    setImg(images[index]);
  }

  //const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxy53My5vcmcvMjAwMC9zdmciFuQmx1ciBzdGREZXZp3Ij48L2ZlR2F1c3NpYW5CbHVyPjwvZmlsdGVyPjxpbWFnZSBmaWx0ZXI9InVybCgjYikiIHhsaW5rOmhyZWY9Ii8+PC9zdmc+";

  return (
    <div className="gallery_container">
      <div className="galleryColumn">
        {images.map((item, idx) =>
          <Image
            onClick={() => handleChangePhoto(idx)}
            key={idx}
            src={item}
            alt="product"
            width={400}
            height={400}
          // placeholder="blur"
          // blurDataURL={blurDataURL}
          />)
        }
      </div>
      <div className="thumbnail">
        <Image onClick={() => setOpenModal(true)} src={img} sizes="20rem" alt="product" fill />
      </div>
      {openModal && <ModalPortal onClose={() => setOpenModal(false)}>
        <div className="thumbnailModal">
          <button type="button" className="resetButtonStyles" title="close" onClick={() => setOpenModal(false)}>
            <Close />
          </button>
          <Image src={img} alt="product" width={800} height={800} />
        </div>
      </ModalPortal>}
    </div>
  )
}