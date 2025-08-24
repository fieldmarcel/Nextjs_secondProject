import  {PrismaClient}  from '@/generated/prisma'


 const db = new PrismaClient();

db.snippet.create({
    data:{
        title:'Title',
        code: 'const abc =()=>{}'
    }
})
export {db};