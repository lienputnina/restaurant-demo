import { NextPage } from 'next';
import './page.scss';
import { Header } from 'src/components/Header/Header';

// todo - create a header/menu

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
