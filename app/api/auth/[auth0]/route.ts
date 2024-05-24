import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/profile",
  }),
  logout: handleLogout({
    returnTo: "/api/auth/login",
  })
});