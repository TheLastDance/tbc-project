import "./PostsListSkeleton.css"
import "../Skeleton.css"
import { FullPostLoader } from "../FullPostLoader/FullPostLoader"

export function PostsListSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) =>
        <div className="postsListSkeleton" key={index}>
          <FullPostLoader />
        </div>
      )}
    </>
  )
}
