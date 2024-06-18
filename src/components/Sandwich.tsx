// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, clear } from "../redux_rtk/sandwichSlice";
import { RootState } from "../redux_rtk/storeRTK";

const Sandwich = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();

  const handleAddBread = () => {
    dispatch(addIngredient('bread'));
  };

  const handleAddCheese = () => {
    dispatch(addIngredient('cheese'));
  };

  const handleAddSalami = () => {
    dispatch(addIngredient('salami'));
  };

  const handleDelete = () => {
    dispatch(clear());
  };

  return (
    <div>
      <h1>Choose your sandwich: </h1>
      <p>Sandwich: {ingredients}</p>
      <button onClick={handleAddBread}>Add bread</button>
      <button onClick={handleAddCheese}>Add cheese</button>
      <button onClick={handleAddSalami}>Add salami</button>
      <button className="deleteBtn" onClick={handleDelete}>Delete all ingredients</button>
    </div>
  );
};

export default Sandwich;
