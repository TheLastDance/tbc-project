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
import { AreYouSureModal } from "@/components/Modals/AreYouSureModal/AreYouSureModal";

interface IProps {
  title: string,
  body: string,
  id: number;
  admin?: boolean;
}

export function FullPostButtons({ title, body, id, admin }: IProps) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();
  const router = useRouter();
  const {
    toggle: toggleDelete,
    setToggleFalse: setToggleFalseDelete,
    setToggleTrue: setToggleTrueDelete,
  } = useToggle();

  const handleDeletePost = async () => {
    const res = await deletePost(id);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
    setToggleFalseDelete();
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

      <button title="remove" type="button" onClick={setToggleTrueDelete} className="resetButtonStyles">
        <Trash />
      </button>

      <AnimatePresence>
        {toggleDelete && <AreYouSureModal setToggleFalse={setToggleFalseDelete} >
          <form action={handleDeletePost}>
            <PendingButton loader mode="glitchHover" type="submit" translationKey="yes" />
          </form>
        </AreYouSureModal>}
      </AnimatePresence>

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
