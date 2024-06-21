"use client"
import "./FullPostButtons.css"
import { Edit } from "@/components/Icons/Edit";
import { Trash } from "@/components/Icons/Trash";
import { ModalUI } from "@/components/Modals/ModalUI/ModalUI";
import { deletePost } from "@/services/actions";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import { useRouter } from "next/navigation";
import { EditPostForm } from "@/components/Forms/EditPostForm/EditPostForm";
import { useToggle } from "@/services/hooks/useToggle";
import toast from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

interface IProps {
  title: string,
  body: string,
  id: number;
  admin?: boolean;
}

export function FullPostButtons({ title, body, id, admin }: IProps) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();
  const router = useRouter();

  const handleDeletePost = async () => {
    const res = await deletePost(id);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
    !admin && router.push("/blog");
    router.refresh();
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

      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  )
}
