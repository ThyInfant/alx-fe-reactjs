import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import mock data
import data from "../data.json";

export default function HomePage() {
  // State for recipes
  const [recipes, setRecipes] = useState([]);

  // Load recipes on component mount
  useEffect(() => {
    setRecipes(data); // data must be an array
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden block"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
