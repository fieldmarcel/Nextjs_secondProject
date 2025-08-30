import { db } from "@/db";
import { notFound } from "next/navigation";
import NotFound from "../notfound";
interface SnippetDetailPageProps {
  params: {
    id: string;
  };
}
function waitForSomeTime(ms:number){
   return new Promise((resolve)=>setTimeout(resolve,ms));
}

export default async function SnippetDetailPage(props: SnippetDetailPageProps) {
  // console.log(props);
 await waitForSomeTime(3000)
  const snippet = await db.snippet.findFirst({
    
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return NotFound();
  }
  return (
    <div>{snippet ? <div>{snippet.code}</div> : <div>"Snippet not "</div>}</div>
  );
}
