import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './SearchSlice';

import { TextInputProps } from '../components/TextInput/TextInput';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
  });
};

export type RootState = {
  search: {
    textInputValue: TextInputProps['value'];
  };
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
