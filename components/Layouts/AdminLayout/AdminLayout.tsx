import "./AdminLayout.css"
import { NavLink } from "@/components/Links/NavLink/NavLink"
import { Users } from "@/components/Icons/Users"
import { Message } from "@/components/Icons/Message"

export function AdminLayout({ children }: ChildrenProps) {
  return (
    <div className="admin_pannel_layout">
      <nav className="admin_navigation">
        <NavLink href="/admin/users">
          <Users />
          <span>users</span>
        </NavLink>
        <NavLink href="/admin/contact">
          <Message />
          <span>messages</span>
        </NavLink>
      </nav>
      {children}
    </div>
  )
}
