import { NextPage } from 'next';
import './page.scss';
import { Header } from 'src/components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="m-8 flex flex-col ">
        <div className="children">
          <p>Hero image</p>
          <p>Search bar</p>
          <p>Other child</p>
        </div>
      </main>
    </>
  );
};

export default Home;
