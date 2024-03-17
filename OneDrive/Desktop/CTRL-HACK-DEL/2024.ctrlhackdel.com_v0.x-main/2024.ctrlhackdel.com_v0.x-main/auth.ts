import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    signIn() {
      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await db.user.findUnique({
        where: { id: token.sub },
      });

      if (!user) return token;

      token.name = user.name;
      token.email = user.email;
      token.picture = user.imageUrl;

      return token;
    },
    async session({ session, token }: { session: Session; token?: JWT }) {
      if (!token) return session;
      if (!session.user) return session;

      if (token.sub) session.user.id = token.sub;

      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture;

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
