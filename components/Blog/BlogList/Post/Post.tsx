"use client"

import "./Post.css";
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import parse from 'html-react-parser';

interface IProps {
  item: IPostItem
}

export function Post({ item }: IProps) {
  const { title, body, id, added_on, user_serial, user_picture } = item;

  const utcDate = new Date(added_on).toLocaleString();

  return (
    <Card>
      <div className="titleAndPhoto_container">
        <h3>{title}</h3>
        <Link href={`/user/${user_serial}`}>
          <Image src={user_picture} alt="profile avatar" width={150} height={150} />
        </Link>
      </div>
      <div className="blog_text">{parse(body)}</div>
      <p>{utcDate}</p>
      <Link href={`/blog/${id}`} className="post_viewFullButton" role="button">
        <TranslateText translationKey="button.viewFull" />
      </Link>
    </Card>
  );
}
