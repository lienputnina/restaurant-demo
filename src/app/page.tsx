import { NextPage } from 'next';
import './page.scss';
import { FoodForm } from '@/components/Form/FoodForm';
import { Title, TitleLevel } from '@/components/Title/Title';

// todo - create "results" page to show after submitting the form
// todo - create a header/menu

const Home: NextPage = () => {
  return (
    <main>
      <div id="form-description">
        <Title
          level={TitleLevel.ONE}
          style={{ fontSize: '50px', lineHeight: '60px', margin: '0' }}
        >
          Favorite food survey
        </Title>
        <p className="page-text">
          This is a survey to find out the national dishes of the employees for
          an international food day at some company.
        </p>
      </div>
      <FoodForm />
    </main>
  );
};

export default Home;
