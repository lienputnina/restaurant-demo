import { configureStore } from '@reduxjs/toolkit';
import searchInputReducer from '../state/slices/SearchInputSlice';
import mealsReducer, { MealDataState } from '../state/slices/MealsSlice';

import { TextInputProps } from '../components/TextInput/TextInput';

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchInput: searchInputReducer,
      meals: mealsReducer,
    },
  });
};

export type RootState = {
  searchInput: {
    textInputValue: TextInputProps['value'];
  };
  meals: MealDataState;
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
