import { PrismaClient } from "@prisma/client";


// We are caching the db client
  // if we already initialized the client once, no need to do it again
declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient


// check against the env variable built into the nodejs runtime
if(process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // if we don't have a cached prisma, create one
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  } 

  // otherwise, just use the already cached prisma
  prisma = global.cachedPrisma;
}

export const db = prisma;