import { FC } from 'react';

import { MealData } from 'src/state/slices/MealsSlice';

export const Meals: FC<{ meals: MealData[] }> = ({ meals }) => {
  return (
    <div className="meal-results">
      {meals.map((meal: MealData) => (
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
  );
};
