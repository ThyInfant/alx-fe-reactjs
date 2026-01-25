import AddRecipeForm from "./components/AddRecipeFrom";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
