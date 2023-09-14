import React from "react";

export interface RecipeItemInterface {
  id: number;
  title: string;
  instructions: Array<string>;
  ingredients: Array<string>;
  image_url: string;
}
export interface RecipeItemPropInterface extends RecipeItemInterface {
  deleteRecipe: (id: number) => void;
  editRecipe: (id: number) => void;
}

export function RecipeItem({
  id,
  title,
  instructions,
  ingredients,
  image_url,
  deleteRecipe,
  editRecipe,
}: RecipeItemPropInterface) {
  const handleDelete = async (id: number) => {
    deleteRecipe(id);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <img className="recipe-img" src={image_url} alt={title} />
      <h2 className="text-xl font-semibold mb-4 my-4">{title}</h2>
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
        <button className="btn btn-blue mr-2" onClick={() => editRecipe(id)}>
          Edit
        </button>
        <button className="btn btn-blue" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
