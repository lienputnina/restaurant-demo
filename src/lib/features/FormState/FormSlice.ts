'use client';

import { TextInputProps } from '@/components/TextInput/TextInput';
import { NumberInputProps } from '@/components/NumberInput/NumberInput';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormDataState {
  textInputValue: TextInputProps['value'];
  numberInputValue: NumberInputProps['value'];
}

const initialState: FormDataState = {
  textInputValue: '',
  numberInputValue: undefined,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTextInputValue: (
      state,
      action: PayloadAction<TextInputProps['value']>,
    ) => {
      state.textInputValue = action.payload; // setting the text input to the value entered by user (new value)
    },
    setNumberInputValue: (
      state,
      action: PayloadAction<NumberInputProps['value']>,
    ) => {
      state.numberInputValue = action.payload; // setting the text input the value entered by user  (new value)
    },
    submitForm: (state) => {
      // todo - send the data somewhere
      console.log(
        `Form submitted with text value ${state.textInputValue} and number value ${state.numberInputValue}`,
      );
      state.textInputValue = '';
      state.numberInputValue = undefined;
    },
    clearForm: (state) => {
      state.textInputValue = '';
      state.numberInputValue = undefined;
    },
  },
});

export const { setTextInputValue, setNumberInputValue, submitForm, clearForm } =
  formSlice.actions;

export default formSlice.reducer;
