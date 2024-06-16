"use client"
import "./CheckoutRegionForm.css"
import { FormContainer } from "../FormContainer/FormContainer"
import { Input } from "@/components/Input/Input"
import { TranslateText } from "@/components/TranslateText/TranslateText"
import { stripeCheckout } from "@/services/actions/checkout/stripeCheckout";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";

const getStripe = async () => await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CheckoutRegionForm({ selectedRegion }: { selectedRegion: string }) {

  const handleCheckout = async (data: FormData) => {
    const res = await stripeCheckout(data);
    const stripe = await getStripe();
    if (res?.result) {
      stripe?.redirectToCheckout({ sessionId: res.result })
    }

    if (res?.error) toast.error(res.error);
  }

  return (
    <FormContainer>
      <form className="checkout_address_form" action={handleCheckout}>
        <Input
          type="text"
          id="checkout_region"
          name="region"
          label={<TranslateText translationKey="form.region" />}
          value={selectedRegion}
          readOnly
          required
        />
        <Input
          type="text"
          id="checkout_city"
          name="city"
          label={<TranslateText translationKey="form.city" />}
          required
        />
        <Input
          type="text"
          id="checkout_address"
          name="address"
          label={<TranslateText translationKey="form.address" />}
          maxLength={100}
          required
        />

        <PendingButton type="submit" translationKey="button.next" mode="glitch" />

      </form>
    </FormContainer>
  )
}
