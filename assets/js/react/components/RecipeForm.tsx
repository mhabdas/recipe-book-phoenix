import React, { ChangeEvent, useState } from "react";

export function RecipeForm() {
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);

  const handleIngredientChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInstructions = [...instructions];
    newInstructions[index] = event.target.value;
    setInstructions(newInstructions);
  };

  const removeInputField = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const addInputField = (
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prevArray) => [...prevArray, ""]);
  };

  return (
    <>
      <div className="max-w-md mx-left p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add your new recipe</h2>
        <div className="mb-4">
          <label className="label" htmlFor="title">
            Title:
          </label>
          <input type="text" id="title" className="input" required />
        </div>

        <div className="mb-4">
          <label className="label">Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e)}
                required
                className="input"
              />
              <button
                type="button"
                onClick={() => removeInputField(index, setIngredients)}
                className="btn btn-blue my-4"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addInputField(setIngredients)}
            className="btn btn-blue"
          >
            Add Ingredient
          </button>
        </div>

        <div className="mb-4">
          <label className="label">Instructions:</label>
          {instructions.map((instruction, index) => (
            <div key={index}>
              <input
                type="text"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e)}
                required
                className="input"
              />
              <button
                type="button"
                onClick={() => removeInputField(index, setInstructions)}
                className="btn btn-blue my-4"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addInputField(setInstructions)}
            className="btn btn-blue"
          >
            Add Instruction
          </button>
        </div>
        <div className="mb-4">
          <label className="label" htmlFor="image">
            Image URL:
          </label>
          <input type="url" id="image" className="input" required />
        </div>
        <button className="btn btn-blue">Add new Recipe</button>
      </div>
      <hr className="my-12" />
    </>
  );
}
