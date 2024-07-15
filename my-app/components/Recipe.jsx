import Link from "next/link"
import {
  Card,
  CardContent,

} from "@/components/ui/card"


 const Recipe = ( {recipe}) => {
  console.log(recipe)
   return (
     <div className="w-full h-screen p-2 " >
      <h1 className=" text-4xl text-center  text-gray-700">
        Recipes
      </h1>
       <div className=" grid lg:grid-cols-3 sm:grid-cols-2 p-2 gap-2">

        {
          recipe.map((r)=><Link href={`/recipe-route/${r.id}`}>
          <Card className ="w-[400px] h-[410px] rounded-md  m-4 hover:scale-[1.1] transition-all   ">
         <CardContent className ="bg-cover overflow-hidden ">
           <div className=" w-fit h-fit">
            <img
            src={r.image}
            alt={r.name}
            />
           </div>
         <div className=" w-full mb-11  m-2 flex  flex-col">
          <h2 className="  font-bold text-gray-800">{r.name}</h2>
          <div className=" w-full  justify-between flex flex-row">

          <h3 className="  text-gray-700  "> rating:{r.rating}</h3>
          <h3 className="  text-gray-700  "> {r.cuisine}</h3>
          </div>
         </div>
         </CardContent>
        </Card>
          </Link>)
        }



        
       </div>
     </div>
   )
 }
 
 export default Recipe
 