import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event)=>{ 
 
  try {
        const { link } = event.context.params;  
        const deletedPost = await prisma.entries.delete({
        where: { link },
    });
    if (!deletedPost) {
        return sendError(event, { statusCode: 404, message: 'Post not found' });
        }

    return { message: 'Post deleted successfully' };
} catch (error) {
    console.error(error);
    return sendError(event, { statusCode: 500, message: 'Database error' });
  } finally {
    await prisma.$disconnect(); // Ensure to disconnect Prisma client
  }
})