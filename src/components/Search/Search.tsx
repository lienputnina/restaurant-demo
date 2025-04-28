'use client';

import { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { MealData } from '../../state/slices/MealsSlice';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { TextInput } from '../TextInput/TextInput';
import { Meals } from '../Meals/Meals';

/*
todo:
add button to clear the search input?
*/

export const Search: FC = () => {
  const meals = useSelector((state: RootState) => state.meals);

  const [searchQuery, setSearchQuery] = useState('');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((userQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (userQuery) {
      params.set('query', userQuery);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const handleInputChange = (newValue: string) => {
    console.log('calling handleInputChange');

    setSearchQuery(newValue);
    handleSearch(searchQuery);
  };

  const filteredMeals = meals.meals
    .filter((meal: MealData) => {
      meal.category.toLowerCase().includes(searchQuery.toLowerCase());
      console.log('the search query is:', searchQuery);
    })
    .toSorted((a: MealData, b: MealData) =>
      a.category.localeCompare(b.category),
    );

  // todo: add error handling - what happens, when the user enters category that doesn't exist?

  return (
    <div className="search">
      <TextInput
        id="food-search"
        label="Browse the dishes in our menu:"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Meals meals={filteredMeals} />
    </div>
  );
};
