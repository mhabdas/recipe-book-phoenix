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
      <div className="recipe-form-container">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" required />

        <div>
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e)}
                required
              />
              <button
                type="button"
                onClick={() => removeInputField(index, setIngredients)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addInputField(setIngredients)}>
            Add Ingredient
          </button>
        </div>

        <div>
          <label>Instructions:</label>
          {instructions.map((instruction, index) => (
            <div key={index}>
              <input
                type="text"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e)}
                required
              />
              <button
                type="button"
                onClick={() => removeInputField(index, setInstructions)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addInputField(setInstructions)}>
            Add Instruction
          </button>
        </div>

        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          id="image"
          required
        />
        <button className="button">Add new Recipe</button>
      </div>
      <hr className="my-12" />
    </>
  );
}
