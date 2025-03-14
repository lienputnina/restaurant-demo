'use client';
/*
todo:
3. Add component for the results
add button to clear the search input?
4. Get results from the API (json file)
4.1. Sort the results alphabetically
5. Add the search logic
6. Move the API call to the "main" page
7. Add a Redux layer for the search data call
8. Move the results code to a separate component (add redux call, style the component)
*/

import { FC } from 'react';
import { TextInput } from '../TextInput/TextInput';

import { setTextInputValue } from '../../state/slices/SearchInputSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';

export const Search: FC = () => {
  // search logic and redux
  const dispatch = useDispatch();
  const textInputValue = useSelector(
    (state: RootState) => state.searchInput.textInputValue,
  );

  return (
    <div className="search">
      <TextInput
        id="food-search"
        label="Browse the dishes in our menu:"
        value={textInputValue}
        onChange={(newValue) => {
          dispatch(setTextInputValue(newValue));
        }}
      />
      {/* <Meals dishes={filteredDishes} /> */}
      <div className="meals">
        <p>Name:</p>
        <p>Description:</p>
        <p>Price:</p>
        <p>Category</p>
        <p>Image:</p>
      </div>
    </div>
  );
};
