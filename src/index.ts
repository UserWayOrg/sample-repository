import { Elysia } from "elysia";

const app = new Elysia()
  // https://github.com/login/oauth/authorize?response_type=code&client_id=Iv1.4fd9bb1b2079c0be
  .get(
    "/github/oauth2/callback",
    ({ query: { code } }) => `Your authorization code is ${code}`
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
