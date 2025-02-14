import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/FormState/FormSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
};

export type RootState = {
  form: {
    textInputValue: string;
    numberInputValue: number | undefined;
  };
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
