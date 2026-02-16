import { useState } from "react";

export default function AddRecipeForm() {
  // State for form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // renamed from instructions

  // State for errors
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients =
        "Enter at least two ingredients, separated by commas";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(); // call validate
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      const newRecipe = {
        id: Date.now(), // Temporary unique ID
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps: steps.split("\n").map((i) => i.trim()),
      };

      console.log("New Recipe Submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Add New Recipe
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 ring-red-200"
                : "border-gray-300 ring-blue-200"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 ring-red-200"
                : "border-gray-300 ring-blue-200"
            }`}
            placeholder="e.g. Spaghetti, Eggs, Bacon, Parmesan"
            rows={3}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (each step on a new line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 ring-red-200"
                : "border-gray-300 ring-blue-200"
            }`}
            placeholder="Step 1: ...&#10;Step 2: ..."
            rows={5}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
