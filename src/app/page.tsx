import { NextPage } from "next";
import "./page.scss"

const Home: NextPage = () => {
  return (
    <main>
      <div id="form-description">
        <h1 id="heading1">Heading</h1>
        <p className="page-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab iste dolores. 
        Vero nihil, praesentium omnis ipsum quos doloribus ducimus?</p>
      </div>
    </main>
  );
};

export default Home;
