"use client"
import "./AddPostForm.css"
import { useState } from "react"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { Input } from "@/components/Input/Input"
import { TextEditor } from "@/components/TextEditor/TextEditor"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton"
import { useRouter } from "next/navigation"
import { addPost } from "@/services/actions"
import { FormContainer } from "../FormContainer/FormContainer"
import toast from "react-hot-toast"

export function AddPostForm() {
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleAddPost = async (data: FormData) => {
    const res = await addPost(data);

    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) {
      toast.success(res.message, { duration: 5000 });
      router.push("/blog");
      router.refresh();
    }
  }

  return (
    <div className="addPostForm_container">
      <FormContainer>
        <form action={handleAddPost}>
          <Input
            label={<TranslateText translationKey="title" />}
            name="title"
            id="addPost_title"
            type="text"
            maxLength={50}
          />

          <input
            type="hidden"
            name="body"
            id="addPost_body"
            value={content}
          />

          <TextEditor content={content} setContent={setContent} />
          <PendingButton loader type="submit" mode="glitchHover" translationKey="post" />
        </form>
      </FormContainer>
    </div>
  )
}
