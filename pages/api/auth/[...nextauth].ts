import { allUsers } from "@/data";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johndoe" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        // Todo: Add logic here to look up the user from a DB on the credentials supplied instead of fake "johndoe" user
        console.log("credenrtials", credentials);
        if (credentials && credentials.username) {
          let user = null;
          allUsers.map((u) => {
            if (u.id === credentials.username) {
              user = u;
            }
          });
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      if (token.sub) {
        token.uid = token.sub;
        return token;
      }
      throw Error("Missing token.sub");
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user.id = token.uid as string;
        return session;
      }
      throw Error("Missing session.user");
    },
  },
};

export default NextAuth(authOptions);
