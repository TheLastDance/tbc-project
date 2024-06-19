"use client"
import "./SingleFileUpload.css"
import { Input } from "@/components/Input/Input"
import { PersonLottie } from "../../Lotties/Person/PersonLottie"
import { useState } from "react"
import Image from "next/image"
import { TranslateText } from "@/components/TranslateText/TranslateText"

export function SingleFileUpload() {
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profilePhoto = e.target.files?.[0];

    if (profilePhoto) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const { result } = e.target!;
        setFile(result);
      }

      fileReader.readAsDataURL(profilePhoto)
    } else {
      setFile(null);
    }
  }

  return (
    <div className="file_upload_single">
      <label htmlFor="profile_image">
        <h5>
          <TranslateText translationKey="uploadAvatar" />
        </h5>
        <div className='person_lottie'>
          {!file ? <PersonLottie /> : <Image src={file as string} alt="avatar" fill />}
        </div>
        <Input
          type="file"
          name="image"
          id="profile_image"
          accept="image/*"
          title="upload file"
          onChange={handlePhotoChange}
        />
      </label>
    </div>
  )
}
