'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MealData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
}

export interface MealDataState {
  meals: MealData[];
}

const initialState: MealDataState = {
  meals: [],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMeals: (state, action: PayloadAction<MealData[]>) => {
      state.meals = action.payload;
    },
    setMeal: (state, action: PayloadAction<MealData>) => {
      const meals = state.meals.filter((meal) => meal.id !== action.payload.id);
      meals.push(action.payload);
      state.meals = meals;
    },
    resetMeals: () => initialState,
  },
});

export const { setMeals, setMeal, resetMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
