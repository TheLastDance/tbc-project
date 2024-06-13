"use client"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton";
import Link from "next/link";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";
import { updateStatus } from "@/services/actions/checkout/update-status";
import toast from "react-hot-toast";


export function OrderRow({ item }: { item: IOrder }) {
  const { id, user_serial, status, refund, products } = item;

  const handleStatusUpdate = async () => {
    const res = await updateStatus(id);
    if (res?.message) toast.success(res.message, { duration: 5000 });
    if (res?.error) toast.success(res.error, { duration: 5000 });
  }

  return (
    <tr>
      <td>
        <input type="checkbox" name="status" id="admin_order_status" onChange={handleStatusUpdate} checked={status} />
      </td>
      <td>
        <GlithHoverLink href="">
          Full
        </GlithHoverLink>
      </td>
      <td>
        {refund === "no" ?
          <form>
            <PendingButton mode="glitchHover" type="submit" >refund</PendingButton>
          </form> :
          refund
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
