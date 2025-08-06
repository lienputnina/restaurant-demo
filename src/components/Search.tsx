'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { MealData } from '../state/slices/MealsSlice';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { OnBlur, TextInput } from './TextInput/TextInput';
import { Meals } from './Meals';
import Link from 'next/link';

export const Search: FC = () => {
  const meals = useSelector((state: RootState) => state.meals);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateURLfromInput = useDebouncedCallback((userQuery: string) => {
    const currentQuery = searchParams.get('query') || '';
    if (userQuery === currentQuery) return;

    const params = new URLSearchParams(searchParams.toString());
    if (userQuery) {
      params.set('query', userQuery);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get('query') || '',
  );

  useEffect(() => {
    updateURLfromInput(searchQuery);
  }, [searchQuery]);

  const searchMeals = (meals: MealData[], searchQuery: string) => {
    const filteredMeals = meals.filter((meal: MealData) => {
      meal.category
        .toLowerCase()
        .trim()
        .includes(searchQuery?.toLowerCase().trim());
    });

    return filteredMeals; // an array
  };

  const filteredMeals = meals.meals.filter((meal: MealData) => {
    meal.category
      .toLowerCase()
      .trim()
      .includes(searchQuery?.toLowerCase().trim());
  });

  const handleInputChange = useCallback<OnBlur>((_event, { newValue }) => {
    // pass filtered meals as the "new value" to have data here
    setSearchQuery(newValue.toLowerCase().trim()); // pass "filtered meals" - needs to be a string
    updateURLfromInput(searchQuery);
  }, []);

  return (
    <div className="search">
      <TextInput
        id="food-search"
        label="Browse the dishes in our menu:"
        // pass value to the input
        onBlur={handleInputChange}
      />
      <div className="meals border-solid  pt-4 mb-4">
        {/* pass the handleInputChange here? Figure out, how to pass data to the component */}
        <Meals meals={filteredMeals} />
        <Link href="/mealPage" className="text-[#591d2d] hover:text-[#73263a]">
          Go to meal page
        </Link>
      </div>
    </div>
  );
};
