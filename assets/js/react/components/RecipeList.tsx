import React from "react";
import { RecipeItem } from "./RecipeItem";

export function RecipeList() {
  const recipes = Array<typeof RecipeItem>();
  return (
    <>
      {recipes.length > 0 ? (
        recipes.map((recipes) => false)
      ) : (
        <div className="recipes-list-container">
          <h3>You don't have any recipes yet</h3>
        </div>
      )}
    </>
  );
}
