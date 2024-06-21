import "./Order.css"
import { DropDown } from "@/components/DropDown/DropDown"
import Link from "next/link"
import { RefundButton } from "./RefundButton"
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink"
import { ImageWithFallback } from "@/components/ImageWithFallback/ImageWithFallback"
import photo from "@/public/img/products/fallback-image.png"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { MotionDiv } from "@/components/MotionDiv/MotionDiv"
import { orderAnimation } from "@/services/animations"

export function Order({ item, admin }: { item: IOrder, admin?: boolean }) {
  const { id, status, products, payment_intent, refund, address, added_on } = item;
  const { price } = products;
  const utcDate = new Date(added_on).toLocaleDateString();


  return (
    <DropDown defaultToggle={admin} header={<div className="dropdownHeader">
      <div className="orders_idAndDate">
        <p><TranslateText translationKey="order.order" /> # {id}</p>
        <p className="nowrap">
          <TranslateText translationKey="order.placed" />
        </p>
        <span>{utcDate}</span>
      </div>
      <div>
        <p><TranslateText translationKey="status" /></p>
        <span>
          {refund ? <TranslateText translationKey="order.refunded" /> :
            status ? <TranslateText translationKey="order.shipped" /> :
              <TranslateText translationKey="order.pending" />}
        </span>
      </div>
      <div>
        <p><TranslateText translationKey="order.total" /></p>
        <span>{price.toFixed(2)}$</span>
      </div>
      <div className="order_address">
        <p><TranslateText translationKey="form.address" /></p>
        <span title={address}>
          {address}
        </span>
      </div>
    </div>}>
      <MotionDiv
        initial="initial"
        animate="animate"
        exit="exit"
        variants={orderAnimation}
        className="dropdown_content"
      >
        {status && !admin && <GlithHoverLink href="/blog/new" translationKey="order.button.review" />}
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
      </MotionDiv>
    </DropDown>
  )
}
