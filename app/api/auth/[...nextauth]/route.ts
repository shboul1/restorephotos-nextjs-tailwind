import NextAuth from "next-auth";
import { authOptitions } from "@config/auth-config";

const handler = NextAuth(authOptitions);

export { handler as GET, handler as POST };
