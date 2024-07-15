import Link from "next/link"

 
 
 const errorPage = () => {
   return (
     <div>
       Page is not found 404 
       <div>

       <Link href={"/"}>Go to Home</Link>
       </div>
     </div>
   )
 }
 
 export default errorPage
 