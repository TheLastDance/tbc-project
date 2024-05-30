import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/user/create-user",
    authorizationParams: {
      prompt: "login",
    },
  }),
  logout: handleLogout({
    returnTo: "/api/auth/login",
  }),
});