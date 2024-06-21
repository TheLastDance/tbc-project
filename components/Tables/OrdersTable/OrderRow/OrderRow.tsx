"use client"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import Link from "next/link";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";
import { updateStatus } from "@/services/actions/checkout/update-status";
import toast from "react-hot-toast";
import { requestRefund } from "@/services/actions/checkout/request-refund";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import Image from "next/image";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { useOptimistic, useTransition } from "react";


export function OrderRow({ item }: { item: IOrder }) {
  const { id, user_serial, refund, products, payment_intent, address, user_picture } = item;
  const [, startTransition] = useTransition();
  const [optimistic, addOptimistic] = useOptimistic<IOrder, IOrder>(
    item,
    (_, newState) => {
      return { ...newState };
    }
  );

  const handleStatusUpdate = async () => {
    startTransition(() => {
      const newStatus = { ...optimistic, status: !optimistic.status }
      return addOptimistic(newStatus);
    })

    const res = await updateStatus(id);
    if (res?.message) toast.success(res.message, { duration: 5000 });
    if (res?.error) toast.error(res.error, { duration: 5000 });
  }

  const handleRefund = async () => {
    const res = await requestRefund(id, payment_intent, true);
    if (res?.error) toast.error(res.error, { duration: 5000 });
  }

  return (
    <tr>
      <td>
        <Checkbox name="status" id={`admin_order_status-${id}`} onChange={handleStatusUpdate} checked={optimistic.status} />
      </td>
      <td>
        <GlithHoverLink href={`/admin/orders/${id}`} translationKey="order.full" />
      </td>
      <td>
        {!refund ?
          <form action={handleRefund}>
            <PendingButton mode="glitchHover" type="submit" translationKey="order.refund" />
          </form> :
          <span>
            <TranslateText translationKey="order.refunded" />
          </span>
        }
      </td>
      <td>{id}</td>
      <td className="orderTable_user_container">
        <Link href={`/user/${user_serial}`}>
          <Image src={user_picture} width={50} height={50} alt="avatar" />
        </Link>
      </td>
      <td>
        {products.price.toFixed(2)}
        $
      </td>
      <td>
        {address}
      </td>
    </tr>
  )
}
