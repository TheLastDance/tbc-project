"use client"
import { Heart } from "@/components/Icons/Heart"
import { addPostLike } from "@/services/actions/postLike/add-post-like"

export function LikeButton({ id }: { id: number }) {

  const handleLike = async () => {
    await addPostLike(id);
  }

  return (
    <button type="button" className="resetButtonStyles" title="like button" onClick={handleLike}>
      <Heart />
    </button>
  )
}
