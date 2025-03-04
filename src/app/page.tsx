import { NextPage } from 'next';
import './page.scss';
import { Header } from 'src/components/Header/Header';
import { Hero } from 'src/components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center ">
        <div className="children">
          <Hero />
          <p>Search bar</p>
          <p>Other child</p>
        </div>
      </main>
    </>
  );
};

export default Home;
