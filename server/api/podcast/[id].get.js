import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event)=>{ 
    const { id } = event.context.params; 
 
    const podcast = await prisma.podcasts.findUnique({
  where: {
      id: parseInt(id) // Ensure you're using the field `id` for comparison
    },
  });
  return podcast;
})