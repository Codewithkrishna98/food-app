import Link from "next/link"

  
  const RecipeDetails = ({getrecipedetails}) => {
    
    return (
      
      <div className=" w-full h-screen flex gap-5 p-5">
         <div className=" lg:w-[400px] lg:h-[300px]  h-[200px] lg:m-5 border rounded-md">
          <img
           src={getrecipedetails?.image}
           alt={getrecipedetails?.name}
           className="  w-full h-full  bg-cover"
          />
         </div>
         <div className=" w-full h-screen  flex flex-col gap-5 ">
           <h1 className="  text-5xl font-bold text-gray-700">{getrecipedetails.name}</h1>
           <h2 className=" text-3xl text-gray-600 ">{getrecipedetails.mealType[0]}</h2>
         <h3 className=" text-2xl text-gray-500">
          {getrecipedetails?.cuisine}
         </h3>
           <h2 className=" text-4xl  text-gray-700 font-semibold">Ingridients:</h2>
          
          <ul className=" text-sm m-5 p-2 list-disc text-gray-900">
               {
                 getrecipedetails.ingredients.map((i)=><li key={i.id}>{i}</li>)
                }
            </ul>
                <Link href={"/recipe-route"}>Go to Back</Link>
          

         </div>
      </div>
    )
  }
  
  export default RecipeDetails
  