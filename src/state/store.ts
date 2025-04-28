import { configureStore } from '@reduxjs/toolkit';
import mealsReducer, { MealDataState } from '../state/slices/MealsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      meals: mealsReducer,
    },
  });
};

export type RootState = {
  meals: MealDataState;
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
