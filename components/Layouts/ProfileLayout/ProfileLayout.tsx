"use client"
import "./ProfileLayout.css"
import { SideBarContainer } from "@/components/SideBar/SideBarContainer"
import { NavLink } from "@/components/Links/NavLink/NavLink"
import { Profile } from "@/components/Icons/Profile"
import { Order } from "@/components/Icons/Order"
import { BlogText } from "@/components/Icons/BlogText"
import { useToggle } from "@/services/hooks/useToggle"

export function ProfileLayout({ children }: ChildrenProps) {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={toggle ? "profile_pannel_layout toggled" : "profile_pannel_layout"}>
      <SideBarContainer setToggle={handleToggle} >
        <NavLink href="/profile" noStartsWith>
          <Profile />
          <span>Profile</span>
        </NavLink>
        <NavLink href="/profile/orders">
          <Order />
          <span>Orders</span>
        </NavLink>
        <NavLink href="/profile/posts">
          <BlogText />
          <span>My Posts</span>
        </NavLink>
      </SideBarContainer>
      {children}
    </div>
  )
}
