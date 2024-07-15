import Recipe from "@/components/Recipe"

  async function fetchRecipe () {
    try {
       const apiResponse =  await fetch("https://dummyjson.com/recipes");
       const data = await apiResponse.json()
       console.log(data.recipes)
       return data.recipes

    } catch (error) {
      throw new Error (error)
    }
  }
   
   const recipePage = async() => {
    const recipe = await fetchRecipe()
     console.log(recipe)
     return (
       <Recipe  recipe={recipe} />
     )
   }
   
   export default recipePage
   
