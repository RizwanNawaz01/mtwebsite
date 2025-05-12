import { PrismaClient } from '@prisma/client'
import md5 from 'md5'
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event)=>{
  const body = await readBody(event)

const prisma = new PrismaClient();

    const user = await prisma.users.findUnique({
        where: {
          email: body.email,
        },
      })
      if (user && user.password === md5(body.password)) {
        const token = jwt.sign(user.id,process.env.JWT_SECRET)

            setCookie(event,'NoteNestJWT',token)
            
        return { success: true, message: 'Login successful', user };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
})