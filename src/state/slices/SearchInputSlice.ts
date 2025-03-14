'use client';

import { TextInputProps } from '../../components/TextInput/TextInput';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  textInputValue: TextInputProps['value'];
}

const initialState: SearchState = {
  textInputValue: '',
};

export const searchInputSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTextInputValue: (
      state,
      action: PayloadAction<TextInputProps['value']>,
    ) => {
      state.textInputValue = action.payload;
    },
  },
});

export const { setTextInputValue } = searchInputSlice.actions;

export default searchInputSlice.reducer;
