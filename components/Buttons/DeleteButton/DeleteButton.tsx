"use client"
import { deleteUser } from "@/services/actions";

export function DeleteButton({ id }: { id: number }) {
  return (
    <button type="button" onClick={() => deleteUser(id)}>Delete user</button>
  )
}
