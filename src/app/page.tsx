import { NextPage } from 'next';
import './page.scss';
import { FoodForm } from '@/components/Form/FoodForm';

// todo - create "results" page to show after submitting the form
// todo - create a header/menu

const Home: NextPage = () => {
  return (
    <main>
      <div id="form-description">
        <h1 id="heading1">Heading</h1>
        <p className="page-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
          iste dolores. Vero nihil, praesentium omnis ipsum quos doloribus
          ducimus?
        </p>
      </div>
      <FoodForm />
    </main>
  );
};

export default Home;
