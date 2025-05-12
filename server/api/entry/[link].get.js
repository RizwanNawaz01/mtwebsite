import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event)=>{ 
    const { link } = event.context.params; 
    const entry = await prisma.entries.findUnique({
    where: { link },
  });
  return entry;
})