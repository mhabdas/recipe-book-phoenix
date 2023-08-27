import React from "react";
export interface RecipeItemInteface {
  id: number;
  title: string;
  instructions: Array<string>;
  ingredients: Array<string>;
  image_url: string;
}

export function RecipeItem({
  id,
  title,
  instructions,
  ingredients,
  image_url,
}: RecipeItemInteface) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <img src={image_url} alt={title} />
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {ingredients.map((ingredient, index) => (
        <span key={index}>{ingredient}</span>
      ))}
      {instructions.map((instruction, index) => (
        <span key={index}>{instruction}</span>
      ))}
      <div className="recipe-actions">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    </div>
  );
}
