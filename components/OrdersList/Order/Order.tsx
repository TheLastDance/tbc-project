import "./Order.css"
import { DropDown } from "@/components/DropDown/DropDown"
import Link from "next/link"
import { RefundButton } from "./RefundButton"
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink"
import { ImageWithFallback } from "@/components/ImageWithFallback/ImageWithFallback"
import photo from "@/public/img/backgrounds/modal-background.jpg"

export function Order({ item, admin }: { item: IOrder, admin?: boolean }) {
  const { id, status, products, payment_intent, refund } = item;
  const { price } = products;


  return (
    <DropDown defaultToggle={admin} header={<div className="dropdownHeader">
      <div className="orders_idAndDate">
        <p>Order # {id}</p>
        <p className="nowrap">order placed</p>
        <span>11.06.2024</span>
      </div>
      <div>
        <p>Status</p>
        <span>{refund ? "Refunded" : status ? "Shipped" : "Pending"}</span>
      </div>
      <div>
        <p>Total</p>
        <span>{price.toFixed(2)}$</span>
      </div>
      <div className="order_address">
        <p>Address</p>
        <span title={"Full Address"} >
          Ajara, Batumi,
        </span>
        <span title={"Full Address"}>
          David Aghmashenebeli 16
        </span>
      </div>
    </div>}>
      <div className="dropdown_content">
        {status && !admin && <GlithHoverLink href="/blog/new">Add Review</GlithHoverLink>}
        {(!status && !admin && !refund) && <RefundButton id={id} payment_intent={payment_intent} />}
        <ul>
          {products.products.map(({ images, id, title, price, quantity }) =>
            <li key={id} className="orderItem">
              <div className="orderItem_info_container">
                <Link href={`/products/${id}`}>
                  <div className="orderItem_image">
                    <ImageWithFallback src={images[0]} fallbackSrc={photo} alt={title} sizes="10rem" fill priority />
                  </div>
                </Link>
                <div className="orderItem_info">
                  <Link href={`/products/${id}`}>
                    <h3>
                      {title}
                    </h3>
                  </Link>
                  <p>Qty:{quantity}</p>
                  <p>{price.toFixed(2)}$</p>
                </div>
              </div>
            </li>)}
        </ul>
      </div>
    </DropDown>
  )
}
