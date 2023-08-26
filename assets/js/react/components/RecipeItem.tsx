import React from "react";
interface RecipeItemInteface {
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
    <div className="recipe-item">
      <img src={image_url} alt={title} />
      <span>{title}</span>
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
