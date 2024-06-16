"use client"
import "./CheckoutModal.css";
import { ModalPortal } from "../ModalPortal/ModalPortal";
import { useState } from "react";
import { Map } from "@/components/Icons/Map";
import { CheckoutRegionForm } from "@/components/Forms/CheckoutRegionForm/CheckoutRegionForm";
import { TranslateText } from "@/components/TranslateText/TranslateText";

export function CheckoutModal({ setToggleFalse }: { setToggleFalse: () => void }) {
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <ModalPortal onClose={setToggleFalse}>
      <section className="checkoutModal">
        <label><TranslateText translationKey="form.selectRegion" />:</label>
        <div>
          <Map selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        </div>
        <CheckoutRegionForm selectedRegion={selectedRegion} />
      </section>
    </ModalPortal>
  )
}
