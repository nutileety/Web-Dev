// src/lib/prisma.ts
// Import the generated contract file straight from your local build directory
import postgres from '@prisma/orm-postgres/runtime';
import contractJson from '../../src/prisma/contract.json'; 


// 1. Explicitly import the type contract declarations emitted by Prisma 8
import type { Contract } from "../../src/prisma/contract.d"; 

const globalForPrisma = globalThis as unknown as {
  db: ReturnType<typeof postgres<Contract>> | undefined;
};

// 2. Pass <Contract> as a generic argument to attach model names like '.user'
export const db = globalForPrisma.db ?? postgres<Contract>({
  contractJson,
  url: process.env.DATABASE_URL,
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db;
