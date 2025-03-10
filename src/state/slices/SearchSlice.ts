'use client';

import { TextInputProps } from '../components/TextInput/TextInput';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  textInputValue: TextInputProps['value'];
}

const initialState: SearchState = {
  textInputValue: '',
};

// reducers are actions that need to be taken on the state.
export const searchSlice = createSlice({
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

export const { setTextInputValue } = searchSlice.actions;

export default searchSlice.reducer;
