'use client';

import { NextPage } from 'next';
import './page.scss';
import { Header } from 'src/components/Header/Header';
import { Hero } from 'src/components/Hero/Hero';
import { TextInput } from 'src/components/TextInput/TextInput';
import { Footer } from 'src/components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="w-full ">
        <Hero />
        <div className="flex flex-col items-center p-6">
          <TextInput
            id="food-search"
            label="Browse the foods in our menu:"
            value=""
            onChange={(newValue: string) => {
              console.log(newValue);
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
