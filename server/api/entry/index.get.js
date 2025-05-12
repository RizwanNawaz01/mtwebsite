import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async ()=>{
    const entries = await prisma.entries.findMany();
    return entries
})