 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

    const { IncomingForm } = await import('formidable');
  const fs = await import('fs');
  const path = await import('path');

  const form = new IncomingForm({
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), 'public', 'diary'),
  });
  // Ensure upload directory exists
  fs.mkdirSync(form.uploadDir, { recursive: true });
 
  return await new Promise((resolve, reject) => {
    form.parse(event.node.req,async  (err, fields, files) => { 
      
      if (err) {
        reject({ error: 'File upload failed', details: err })
        return
      }

      const image = files.image?.[0];  
      const link = fields.link?.[0];
     
      const text = fields.text?.[0];
      const incept = fields.incept?.[0];
      const heading = fields.heading?.[0];
 const img = image?.filepath.replace(process.cwd() + '\\public', '');

   

      try {
      const diaryEntry = await prisma.entries.create({
          data: {
            heading,
            link,
            text,
            incept,
            img,
          },
        })

        resolve({
          message: 'Upload successful',
          status:200
        }) } catch (dbError) {
        reject({ error: 'Database save failed', details: dbError })
      }
    });
  });
});
