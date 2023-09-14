import React, { useEffect, useState } from "react";
import { RecipeItem, RecipeItemInterface } from "./RecipeItem";

interface RecipeListInterface {
  data: Array<RecipeItemInterface>;
}

export function RecipeList() {
  const [recipes, setRecipes] = useState<RecipeListInterface>({ data: [] });

  useEffect(() => {
    const getTaskList = async () => {
      const response = await fetch("http://localhost:4000/api/recipes");
      const responseJson = await response.json();
      setRecipes(responseJson);
    };
    getTaskList();
  }, []);

  const deleteRecipe = async (id: number) => {
    await fetch(`http://localhost:4000/api/recipes/${id}`, {
      method: "DELETE",
    });
    const response = await fetch("http://localhost:4000/api/recipes");
    const responseJson = await response.json();
    setRecipes(responseJson);
  };

  const editRecipe = async (id: number) => {
    await fetch(`http://localhost:4000/api/recipes/${id}`, {
      method: "PUT",
    });
    const response = await fetch("http://localhost:4000/api/recipes");
    const responseJson = await response.json();
    setRecipes(responseJson);
  };

  return (
    <div className="flex">
      {recipes?.data?.length > 0 ? (
        recipes.data.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            deleteRecipe={deleteRecipe}
            editRecipe={editRecipe}
            {...recipe}
          />
        ))
      ) : (
        <div className="recipes-list-container">
          <h3>You don't have any recipes yet</h3>
        </div>
      )}
    </div>
  );
}
