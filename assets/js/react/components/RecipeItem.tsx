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
      <ul className="list-disc ml-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul className="mt-4 ml-5 list-decimal">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      <div className="my-4">
        <button className="btn btn-blue mr-2">Edit</button>
        <button className="btn btn-blue">Delete</button>
      </div>
    </div>
  );
}
