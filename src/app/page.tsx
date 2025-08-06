'use client';

import { NextPage } from 'next';
import { Header } from 'src/components/Header/Header';
import { Hero } from 'src/components/Hero';
import { Footer } from 'src/components/Footer';
import { Search } from 'src/components/Search';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/state/hooks';
import { useEffect } from 'react';
import { MealData, setMeals } from 'src/state/slices/MealsSlice';
import { RootState } from 'src/state/store';
import './page.scss';

const mealData: MealData[] = require('../data/mealData.json');

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { meals } = useAppSelector((state: RootState) => state.meals);

  useEffect(() => {
    if (!meals.length) {
      dispatch(setMeals(mealData));
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main w-full">
        <Hero />
        <div className="flex flex-col justify-start p-6">
          <Search />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
