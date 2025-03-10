'use client';

import { NextPage } from 'next';
import { Header } from 'src/components/Header/Header';
import { Hero } from 'src/components/Hero/Hero';
import { Footer } from 'src/components/Footer/Footer';
import { Search } from 'src/components/Search/Search';

import './page.scss';

// todo - create the main call to json file. Install json server, if necessary.

const Home: NextPage = () => {
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
