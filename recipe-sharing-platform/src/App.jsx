import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Recipe detail page route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
