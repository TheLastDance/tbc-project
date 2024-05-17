import "./CartList.css";
import { CartItem } from "./CartItem/CartItem";
import { TranslateText } from "../TranslateText/TranslateText";
import { getCart } from "@/services/data-fetch/cart/get-cart";
import { CartResetButton } from "./Buttons/CartResetButton";

export async function CartList() {
  const cart = await getCart();

  return (
    <section className="cart_container">
      <div className="cart_items">

        {cart.count > 0 &&
          <div>
            <h1 className="capitalize">
              <TranslateText translationKey="cart.heading" />
            </h1>
            <CartResetButton />
          </div>
        }

        {cart.count <= 0 && <p><TranslateText translationKey="cart.emptyMessage" /></p>}

        <ul>
          {cart.products.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>

      </div>
      {cart.count > 0 &&
        <div className="cart_info capitalize">
          <p>
            <TranslateText translationKey="cart.items" />: <span>{cart.count}</span>
          </p>
          <p>
            <TranslateText translationKey="cart.total" />: <span>{cart.price.toFixed(2)}$</span>
          </p>
          <button type="button">
            <TranslateText translationKey="button.checkout" />
          </button>
        </div>
      }
    </section>
  )
}
