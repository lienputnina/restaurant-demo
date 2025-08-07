'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { MealData } from '../state/slices/MealsSlice';

import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { TextInput } from './TextInput/TextInput';
import { Meals } from './Meals';
import Link from 'next/link';

export const Search: FC = () => {
  const { meals } = useSelector((state: RootState) => state.meals);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [inputValue, setInputValue] = useState(
    () => searchParams.get('query') || '',
  );
  const [filteredMeals, setFilteredMeals] = useState<MealData[]>([]);

  const updateURLfromInput = useDebouncedCallback((userQuery: string) => {
    const currentQuery = searchParams.get('query') || '';
    if (userQuery === currentQuery) return;

    const params = new URLSearchParams(searchParams.toString());
    if (userQuery) {
      params.set('query', userQuery);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  useEffect(() => {
    updateURLfromInput(inputValue);

    const filteredResults = meals.filter((meal: MealData) =>
      meal.category
        .toLowerCase()
        .trim()
        .includes(inputValue.toLowerCase().trim()),
    );

    setFilteredMeals(filteredResults);
  }, [inputValue, meals]);

  useEffect(() => {
    setInputValue(searchParams.get('query') || '');
  }, [searchParams.get('query') || '']);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [],
  );

  return (
    <div className="search">
      <TextInput
        id="food-search"
        label="Browse the dishes in our menu:"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="meals border-solid  pt-4 mb-4">
        <Meals meals={filteredMeals} />
      </div>
    </div>
  );
};
