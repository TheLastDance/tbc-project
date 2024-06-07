"use client"
import { Input } from "../Input/Input"


export function FileUpload() {

  return (
    <>
      <Input
        type="file"
        name="image"
        id="profile_image"
        accept="image/*"
        title="file"
      />
    </>
  )
}
