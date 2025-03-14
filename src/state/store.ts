import { configureStore } from '@reduxjs/toolkit';
import searchInputReducer from '../state/slices/SearchInputSlice';

import { TextInputProps } from '../components/TextInput/TextInput';

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchInput: searchInputReducer,
    },
  });
};

export type RootState = {
  searchInput: {
    textInputValue: TextInputProps['value'];
  };
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
