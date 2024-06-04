"use client"
import { Edit } from "@/components/Icons/Edit";
import { Trash } from "@/components/Icons/Trash";
import { useState } from "react";
import { ModalUI } from "@/components/Modals/ModalUI/ModalUI";
import { Input } from "@/components/Input/Input";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { FormContainer } from "@/components/Forms/FormContainer/FormContainer";
import { editPost } from "@/services/actions";
import { deletePost } from "@/services/actions";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import { useRouter } from "next/navigation";

interface IProps {
  title: string,
  body: string,
  id: number;
}

export function FullPostButtons({ title, body, id }: IProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEditPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const res = await editPost(data, id);

    if (res?.error) {
      setError("Something went wrong!")
    } else {
      await new Promise((res) => setTimeout(res, 1000))
      setOpenEdit(false);
    }
    setLoading(false);
  }

  const handleDeletePost = async () => {
    await deletePost(id);
    router.push("/blog");
  }

  return (
    <div className="fullpost_buttons">
      <button
        type="button"
        title="edit"
        className="resetButtonStyles"
        onClick={() => setOpenEdit(true)}
      >
        <Edit />
      </button>

      <form action={handleDeletePost}>
        <PendingButton type="submit" title="remove" className="resetButtonStyles">
          <Trash />
        </PendingButton>
      </form>

      {/* <button type="button" title="remove" className="resetButtonStyles"><Trash /></button> */}

      {openEdit &&
        <ModalUI setToggleFalse={() => setOpenEdit(false)}>
          <FormContainer>
            <form onSubmit={(e) => handleEditPost(e)}>
              <Input
                label={<TranslateText translationKey="title" />}
                name="title"
                id="post_title"
                type="text"
                defaultValue={title}
                maxLength={50}
                required
              />

              <Input
                label={<TranslateText translationKey="post" />}
                name="body"
                id="post_body"
                type="text"
                defaultValue={body}
                textArea
                rows={5}
                maxLength={10000}
                minLength={20}
                required
              />
              {error && <p>{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                translationKey="edit"
                mode="glitchHover"
              />
            </form>
          </FormContainer>
        </ModalUI>
      }
    </div>
  )
}
