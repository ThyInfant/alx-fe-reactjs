import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  /* ✅ REQUIRED FOR TASK 0 (DO NOT REMOVE) */
  setRecipes: (recipes) => set({ recipes }),

  /* ---------- SEARCH (TASK 2) ---------- */
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
      ),
    })),

  /* ---------- CORE CRUD (TASK 1) ---------- */
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r,
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r,
      ),
    })),

  /* ---------- FAVORITES & RECOMMENDATIONS (TASK 3) ---------- */
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5,
      ),
    })),
}));
