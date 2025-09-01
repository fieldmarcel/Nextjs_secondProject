'use server';
import { db } from "@/db";
import { redirect } from "next/navigation";
import type { Snippet } from "@prisma/client";
import { notFound } from "next/navigation";
// import { useFormState } from "react-dom";

interface UpdateSnippetParams {
  id: number;
  title: string;
  code: string;
}
export  async function  updateSnippet(params :UpdateSnippetParams){

  const snippet = await db.snippet.update({
        where:{id:params.id},
        data:{code :params.code,}

    })
    if(!snippet){
      return notFound();
    }
     console.log(snippet);
    // redirect the user back to the  route of that id 
     redirect(`/snippets/${params.id}`);
}

export   async function deleteSnippet(id:number){
   await db.snippet.delete({
    where:{id:id}
  })
  redirect('/');
}





 export async function createSnippet(formState: {message:string},formData:FormData) {
  //this needs to be a server action
  //specifically in nextjs,, when this word is written
  //then nextjs treat it to be be a server action 
// "use server";

//   //check users input and make sure they re valid
//   const title= formData.get('title') as string;
// const code = formData.get('code') as string;

return { message:"hello"}
// //create a new record in databse 

// const snippet =await db.snippet.create({
//   data:{
//     title,
//     code
//   }
// });
// // console.log(snippet);
// // redireect the user back to the root route
// redirect('/');
// }  

// When the user submits the form, Next.js automatically collects the form data and calls the function you passed as action on the server.

// The function is called with a FormData object that contains all the form fields (title, code, etc.).
// action={createSnippet} → ✅ Passes a reference, Next.js calls it with FormData when submitted.


 }
