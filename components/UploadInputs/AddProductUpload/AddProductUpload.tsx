"use client"
import "./AddProductUpload.css"
import { loadImagesSequentially } from "@/services/utils"
import { useState, useRef } from "react"
import Image from "next/image"
import { Upload } from "@/components/Icons/Upload"

interface IProps {
  setFiles: React.Dispatch<React.SetStateAction<(File | string)[]>>,
  settedPhotos?: string[],
}

export function AddProductUpload({ setFiles, settedPhotos }: IProps) {
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>(settedPhotos || []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedPhotos = e.target.files;

    if (uploadedPhotos?.length) {
      const uploadedPhotosArray = Array.from(uploadedPhotos);
      setFiles(prev => [...prev, ...uploadedPhotosArray]);

      const newImages = await loadImagesSequentially(uploadedPhotosArray);
      setImages(prev => [...prev, ...newImages]);
    }
  }

  const handlePhotoDelete = (index: number) => {
    setImages(prev => prev.filter((_, idx) => index !== idx));
    setFiles(prev => prev.filter((_, idx) => index !== idx));
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <>
      <div className="file_upload_multiple">
        <label htmlFor="addProduct_images">
          <div>
            <h5>Upload Images</h5>
            <Upload />
            <input
              ref={fileInputRef}
              type="file"
              name="photos"
              id="addProduct_images"
              accept="image/*"
              title="upload file"
              onChange={handlePhotoChange}
              multiple
            />
          </div>
        </label>
      </div>

      {images.length ?
        <ul className="createProduct_images">
          {images.map((item, index) => <li key={String(item)}>
            <button type="button" className="resetButtonStyles" onClick={() => handlePhotoDelete(index)}>X</button>
            <Image src={item as string} alt="product_image" sizes="8rem" fill />
          </li>)}
        </ul> : null}
    </>
  )
}
