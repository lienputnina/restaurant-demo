import { NextPage } from 'next';
import './page.scss';
import { Title, TitleAlignment, TitleLevel } from '@/components/Title/Title';

// todo - create a header/menu

const Home: NextPage = () => {
  return (
    <main>
      <Title
        level={TitleLevel.ONE}
        style={{ fontSize: '30px', lineHeight: '30px', margin: '0' }}
        alignment={TitleAlignment.CENTER}
      >
        New content will go here
      </Title>
    </main>
  );
};

export default Home;
