import "./AdminLayout.css"
import { NavLink } from "@/components/Links/NavLink/NavLink"
import { Users } from "@/components/Icons/Users"
import { Message } from "@/components/Icons/Message"
import { Box } from "@/components/Icons/Box"
import { Order } from "@/components/Icons/Order"
import { BlogText } from "@/components/Icons/BlogText"

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
        <NavLink href="/admin/products">
          <Box />
          <span>products</span>
        </NavLink>
        <NavLink href="/admin/blog">
          <BlogText />
          <span>posts</span>
        </NavLink>
        <NavLink href="/admin/orders">
          <Order />
          <span>orders</span>
        </NavLink>
      </nav>
      {children}
    </div>
  )
}
