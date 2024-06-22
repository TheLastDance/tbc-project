"use client"
import "./AdminLayout.css"
import { NavLink } from "@/components/Links/NavLink/NavLink"
import { Users } from "@/components/Icons/Users"
import { Message } from "@/components/Icons/Message"
import { Box } from "@/components/Icons/Box"
import { Order } from "@/components/Icons/Order"
import { BlogText } from "@/components/Icons/BlogText"
import { SideBarContainer } from "@/components/SideBar/SideBarContainer"
import { useToggle } from "@/services/hooks/useToggle"
import { TranslateText } from "@/components/TranslateText/TranslateText"

export function AdminLayout({ children }: ChildrenProps) {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={toggle ? "admin_pannel_layout toggled" : "admin_pannel_layout"}>
      <SideBarContainer setToggle={handleToggle}>
        <NavLink href="/admin/users">
          <Users />
          <span>
            <TranslateText translationKey="adminPannel.users" />
          </span>
        </NavLink>
        <NavLink href="/admin/contact">
          <Message />
          <span>
            <TranslateText translationKey="adminPannel.messages" />
          </span>
        </NavLink>
        <NavLink href="/admin/products">
          <Box />
          <span>
            <TranslateText translationKey="adminPannel.products" />
          </span>
        </NavLink>
        <NavLink href="/admin/blog">
          <BlogText />
          <span>
            <TranslateText translationKey="adminPannel.posts" />
          </span>
        </NavLink>
        <NavLink href="/admin/orders">
          <Order />
          <span>
            <TranslateText translationKey="adminPannel.orders" />
          </span>
        </NavLink>
      </SideBarContainer>
      {children}
    </div>
  )
}
