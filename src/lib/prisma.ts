import "dotenv/config"
import pg from "pg" // 'pg' লাইব্রেরি ইম্পোর্ট করতে হবে
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"
import { prismaAdapter } from "better-auth/adapters/prisma"

const connectionString = `${process.env.DATABASE_URL}`

const pool = new pg.Pool({ connectionString })

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

export { prisma }
