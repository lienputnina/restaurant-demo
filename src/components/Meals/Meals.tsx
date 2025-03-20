import { FC } from 'react';

import { useSelector } from 'react-redux';
import { MealData } from 'src/state/slices/MealsSlice';
import { RootState } from 'src/state/store';

export interface MealsProps {
  mealData: MealData[];
}

export const Meals: FC<{ mealData: MealsProps[] }> = () => {
  const mealData = useSelector((state: RootState) => state.meals);

  return (
    <div className="meal-results">
      {mealData.meals.map((meal: MealData) => (
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
