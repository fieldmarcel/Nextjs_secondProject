import { db } from "@/db";
import Link from "next/link";

export default async  function Home() {
const snippets= await db.snippet.findMany();

const renderedsnippets= snippets.map((snippet)=>{
  return (
    <div key={snippet.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <Link key={snippet.id} href={`/snippets/${snippet.id}`} className="text-xl font-semibold mb-2"></Link>
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
        {/* <code>{snippet.code}</code> */}
        <div>{snippet.title}</div>
        <div>View</div>
      </pre>
    </div>
  );
})
  return (

   <div>

{renderedsnippets}


   </div>
  );
}
