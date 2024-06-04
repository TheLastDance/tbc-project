"use client"
import "./EditPostForm.css"
import { useState } from "react"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { TextEditor } from "@/components/TextEditor/TextEditor"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { editPost } from "@/services/actions"

interface IProps {
  title: string,
  body: string,
  id: number;
  setOpenEdit: () => void;
}

export function EditPostForm({ title, body, id, setOpenEdit }: IProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState(body);

  const handleEditPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const res = await editPost(data, id);

    if (res?.error) {
      setError(res.error as string)
    } else {
      await new Promise((res) => setTimeout(res, 1000))
      setOpenEdit();
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => handleEditPost(e)} className="editPostForm_container">
        <Input
          label={<TranslateText translationKey="title" />}
          name="title"
          id="post_title"
          type="text"
          defaultValue={title}
          maxLength={50}
        />

        <input
          type="hidden"
          name="body"
          id="addPost_body"
          value={content}
        />

        <TextEditor content={content} setContent={setContent} />

        {error && <p>{error}</p>}
        <Button
          type="submit"
          disabled={loading}
          translationKey="edit"
          mode="glitchHover"
        />
      </form>
    </FormContainer>
  )
}
