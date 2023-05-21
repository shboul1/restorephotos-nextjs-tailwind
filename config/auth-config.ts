import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
export const authOptitions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
};
