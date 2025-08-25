import { db } from "@/db";

export default async  function Home() {
const snippets= await db.snippet.findMany();

const renderedsnippets= snippets.map((snippet)=>{
  return (
    <div key={snippet.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">{snippet.title}</h3>
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
        {/* <code>{snippet.code}</code> */}
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
