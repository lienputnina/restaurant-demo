'use client';

import { FC } from 'react';
import { TextInput } from '../TextInput/TextInput';

import { setTextInputValue } from '../../state/slices/SearchInputSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { MealData } from '../../state/slices/MealsSlice';

/*
todo:
4. Add component for the results
add button to clear the search input?
*/

export const Search: FC = () => {
  const dispatch = useDispatch();
  const textInputValue = useSelector(
    (state: RootState) => state.searchInput.textInputValue,
  );
  const mealData = useSelector((state: RootState) => state.meals);

  const filteredMeals = mealData.meals
    .filter((meal: MealData) =>
      meal.category.toLowerCase().includes(textInputValue.toLowerCase()),
    )
    .toSorted((a: MealData, b: MealData) =>
      a.category.localeCompare(b.category),
    );

  // todo: add error handling - what happens, when the user enters category that doesn't exist?

  return (
    <div className="search">
      <TextInput
        id="food-search"
        label="Browse the dishes in our menu:"
        value={textInputValue}
        onChange={(newValue) => {
          dispatch(setTextInputValue(newValue));
        }}
      />
      <div className="meal-results">
        {mealData.meals.map((meal) => (
          <ul
            key={meal.id}
            className="border-solid border-2 border-black rounded p-4 mb-4"
          >
            <img src={meal.img} width={200} height={200} />
            <div className="meal-text mt-2">
              <li>Name: {meal.name}</li>
              <li>Description: {meal.description}</li>
              <li>Price: {meal.price} eur</li>
              <li>Category: {meal.category}</li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};
