import React, { useEffect, useState } from "react";
import { RecipeItem, RecipeItemInteface } from "./RecipeItem";

interface RecipeListInterface {
  data: Array<RecipeItemInteface>;
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

  return (
    <div className="flex">
      {recipes?.data?.length > 0 ? (
        recipes.data.map((recipe) => <RecipeItem key={recipe.id} {...recipe} />)
      ) : (
        <div className="recipes-list-container">
          <h3>You don't have any recipes yet</h3>
        </div>
      )}
    </div>
  );
}
