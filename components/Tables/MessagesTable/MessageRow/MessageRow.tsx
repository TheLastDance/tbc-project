"use client"

import "../../../UI/GlitchEffects/Buttons/GlitchHoverButton/GlitchHoverButton.css";
import Link from "next/link";
import { useI18n } from "@/locales/client";

export function MessageRow({ item }: { item: IMessage }) {
  const { firstname, lastname, tel, email, added_on, body } = item;
  const utcDate = new Date(added_on).toLocaleString();
  const t = useI18n()
  const text = t("table.answer");

  return (
    <tr>
      <td>
        <Link
          href={`mailto:${email}?subject=Answer on your question`}
          className="hero-h glitch-h layers-h"
          data-text={text}
        >
          {text}
        </Link>
      </td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{tel}</td>
      <td className="messagesTable_text">{body}</td>
      <td>{utcDate}</td>
    </tr>
  )
}
