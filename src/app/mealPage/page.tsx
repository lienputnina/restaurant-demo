'use client';

import {
  Title,
  TitleAlignment,
  TitleLevel,
} from '../../components/Title/Title';
import { Meals } from 'src/components/Meals';

import { NextPage } from 'next';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import './mealPage.scss';
import { Header } from 'src/components/Header/Header';

const SingleDish: NextPage = () => {
  const meals = useSelector((state: RootState) => state.meals);

  return (
    <>
      <Header />
      <div className="w-full m-6 flex flex-col items-center">
        <Title
          level={TitleLevel.ONE}
          alignment={TitleAlignment.CENTER}
          style={{ fontSize: '50px', lineHeight: '50px', marginBottom: '15px' }}
        >
          {/* what is the problem? */}
          {/* {meals.meals[0].name} */}
          Meal name
        </Title>
        {/* see, if this works */}
        <Meals meals={meals.meals} />
      </div>
    </>
  );
};

export default SingleDish;
