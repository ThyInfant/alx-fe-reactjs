import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipes</h2>

      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}
          >
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>

            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
