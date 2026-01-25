import { Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recipe Sharing App</h1>

      {/* Trigger recommendations */}
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
