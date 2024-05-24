import { AuthLayout } from "@/components/Layouts/AuthLayout";
import { withPageAuthRequired, AppRouterPageRoute } from "@auth0/nextjs-auth0";

async function Layout({ children }: ChildrenProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default withPageAuthRequired(Layout as AppRouterPageRoute, { returnTo: "/api/auth/login" })
