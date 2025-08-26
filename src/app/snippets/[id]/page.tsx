
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetDetailPageProps {
params:{
    id:string
    }
}
export default async function SnippetDetailPage(props: SnippetDetailPageProps) {
 
    console.log(props);
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

    if(!snippet){   return notFound();  }
    return (
    <div>
{snippet ?( <div>{snippet.code}</div>): <div>"Snippet not "</div> }
    </div>
  )
}