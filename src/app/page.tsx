'use client';

import { NextPage } from 'next';
import { Header } from 'src/components/Header/Header';
import { Hero } from 'src/components/Hero/Hero';
import { Footer } from 'src/components/Footer/Footer';
import { Search } from 'src/components/Search/Search';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/state/hooks';
import { useEffect } from 'react';
import { setMeals } from 'src/state/slices/MealsSlice';
import { RootState } from 'src/state/store';
import mealsData from '../data/mealsData.json';

import './page.scss';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const meals = useAppSelector((state: RootState) => state.meals);

  useEffect(() => {
    if (!meals.meals.length) {
      dispatch(setMeals(mealsData));
    }
  }, [dispatch]);

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
