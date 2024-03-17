// This code ensures that our app uses a single, shared
// instance of PrismaClient. In development, due to the
// constant refreshing of the client, we would end up
// creating multiple instances of PrismaClient without
// this code in place. This code is ONLY for development.

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
