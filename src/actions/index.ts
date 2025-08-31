'use server';
import { db } from "@/db";
import { redirect } from "next/navigation";
import type { Snippet } from "@prisma/client";
import { notFound } from "next/navigation";
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
