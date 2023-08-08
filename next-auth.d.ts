import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    image: string;
    email: string;
    name: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
    } & User;
  }
}
declare module "next-auth/jwt" {
  /**
   * Returned by the `jwt` callback and `getToken` as we are using JWT sessions strategy
   */
  interface JWT {
    uid: string;
  }
}
