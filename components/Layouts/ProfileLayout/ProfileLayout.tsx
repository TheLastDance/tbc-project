"use client"
import "./ProfileLayout.css"
import { SideBarContainer } from "@/components/SideBar/SideBarContainer"
import { NavLink } from "@/components/Links/NavLink/NavLink"
import { Profile } from "@/components/Icons/Profile"
import { Order } from "@/components/Icons/Order"
import { BlogText } from "@/components/Icons/BlogText"
import { useToggle } from "@/services/hooks/useToggle"
import { TranslateText } from "@/components/TranslateText/TranslateText"

export function ProfileLayout({ children }: ChildrenProps) {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className={toggle ? "profile_pannel_layout toggled" : "profile_pannel_layout"}>
      <SideBarContainer setToggle={handleToggle} >
        <NavLink href="/profile" noStartsWith>
          <Profile />
          <span>
            <TranslateText translationKey="profilePannel.profile" />
          </span>
        </NavLink>
        <NavLink href="/profile/orders">
          <Order />
          <span>
            <TranslateText translationKey="profilePannel.orders" />
          </span>
        </NavLink>
        <NavLink href="/profile/posts">
          <BlogText />
          <span>
            <TranslateText translationKey="profilePannel.posts" />
          </span>
        </NavLink>
      </SideBarContainer>
      {children}
    </div>
  )
}
