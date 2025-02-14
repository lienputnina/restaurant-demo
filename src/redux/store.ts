import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/FormState/FormSlice';
import { TextInputProps } from '@/components/TextInput/TextInput';
import { NumberInputProps } from '@/components/NumberInput/NumberInput';

export const makeStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
};

export type RootState = {
  form: {
    textInputValue: TextInputProps['value'];
    numberInputValue: NumberInputProps['value'];
  };
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
