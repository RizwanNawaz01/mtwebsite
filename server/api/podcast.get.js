import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async ()=>{
    const podcasts = await prisma.podcasts.findMany()
    return podcasts
})