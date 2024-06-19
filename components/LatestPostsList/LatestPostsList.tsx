import "./LatestPostsList.css";
import Link from "next/link"
import { PaginationUI } from "../Pagination/Pagination";
import { TranslateText } from "../TranslateText/TranslateText";

interface IProps {
  paginationSize?: number,
  posts: { id: number, title: string }[],
  params: {
    page?: string,
  }
}

export function LatestPostsList({ posts, params, paginationSize = 5 }: IProps) {
  const page = Number(params?.page) || 1;
  const paginatedPosts = posts.slice(paginationSize * (page - 1), page * paginationSize);
  if (!posts.length) return null;

  return (
    <section className="latestPosts_container">
      <h3>
        <TranslateText translationKey="latestPosts" />:
      </h3>
      <ul className="latestPosts_list">
        {paginatedPosts.map(item => <li key={item.id} >
          <Link href={`/blog/${item.id}`} >
            {item.title}
          </Link>
        </li>)}
      </ul>
      <PaginationUI totalPages={posts.length} size={paginationSize} />
    </section>
  )
}
