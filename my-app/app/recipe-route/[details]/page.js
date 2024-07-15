import RecipeDetails from "@/components/RecipeDetails";


async function fetchRecipeDetails(recipeId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const data = await apiResponse.json();
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const RecipeDetail = async ({ params }) => {
  const getrecipedetails = await fetchRecipeDetails(params?.details);
  console.log(getrecipedetails);
  return <RecipeDetails getrecipedetails={getrecipedetails} />;
};

export default RecipeDetail;
