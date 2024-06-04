"use client"
import { Edit } from "@/components/Icons/Edit";
import { Trash } from "@/components/Icons/Trash";
import { ModalUI } from "@/components/Modals/ModalUI/ModalUI";
import { deletePost } from "@/services/actions";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import { useRouter } from "next/navigation";
import { EditPostForm } from "@/components/Forms/EditPostForm/EditPostForm";
import { useToggle } from "@/services/hooks/useToggle";

interface IProps {
  title: string,
  body: string,
  id: number;
}

export function FullPostButtons({ title, body, id }: IProps) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();
  const router = useRouter();

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
        onClick={setToggleTrue}
      >
        <Edit />
      </button>

      <form action={handleDeletePost}>
        <PendingButton type="submit" title="remove" className="resetButtonStyles">
          <Trash />
        </PendingButton>
      </form>

      {toggle &&
        <ModalUI setToggleFalse={setToggleFalse}>
          <EditPostForm
            setOpenEdit={setToggleFalse}
            id={id}
            title={title}
            body={body}
          />
        </ModalUI>
      }
    </div>
  )
}
