import "./Error.css";
import Image from "next/image";
import Link from "next/link";
import error_image from "@/public/img/error/error-img.png";

export function Error({ error, reset, message, href }) {
  return (
    <section className="errorPage">
      <h1>Something went wrong!</h1>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <Image
        src={error_image}
        alt="error occured!"
        width={700}
        height={700}
        priority
      />
      <Link href={href} className="button">
        Home Page
      </Link>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
