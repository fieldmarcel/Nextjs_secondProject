import { db } from "@/db";
// import NotFound from "../../notfound";
import { notFound } from "next/navigation";
import ClientsnippetEditform from "@/components/ClientsnippetEditform";
interface EditProps{
    params:{
        id:string;
    }
}

export default  async function Edit(props:EditProps){

const id= parseInt(props.params.id);

const  snippet= await db.snippet.findFirst({
    where:{id:id}

})

if(!snippet){
    return notFound();
}



        return <div><ClientsnippetEditform snippet={snippet}/></div>
}