"use client"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import Link from "next/link";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";
import { updateStatus } from "@/services/actions/checkout/update-status";
import toast from "react-hot-toast";
import { requestRefund } from "@/services/actions/checkout/request-refund";


export function OrderRow({ item }: { item: IOrder }) {
  const { id, user_serial, status, refund, products, payment_intent } = item;

  const handleStatusUpdate = async () => {
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
        <input type="checkbox" name="status" id="admin_order_status" onChange={handleStatusUpdate} checked={status} />
      </td>
      <td>
        <GlithHoverLink href={`/admin/orders/${id}`}>
          Full
        </GlithHoverLink>
      </td>
      <td>
        {!refund ?
          <form action={handleRefund}>
            <PendingButton mode="glitchHover" type="submit" >Refund</PendingButton>
          </form> :
          <span>Refunded</span>
        }
      </td>
      <td>{id}</td>
      <td>
        <Link href={`/user/${user_serial}`}>
          user
        </Link>
      </td>
      <td>
        {products.price.toFixed(2)}
        $
      </td>
    </tr>
  )
}
