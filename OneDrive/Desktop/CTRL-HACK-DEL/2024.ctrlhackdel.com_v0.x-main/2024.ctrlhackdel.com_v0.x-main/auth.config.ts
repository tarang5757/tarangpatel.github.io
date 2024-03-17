import type { NextAuthConfig } from "next-auth";
import Google from "@auth/core/providers/google";
import Discord from "@auth/core/providers/discord";

export default {
  secret: process.env.AUTH_SECRET,
  providers: [Google, Discord],
} satisfies NextAuthConfig;
