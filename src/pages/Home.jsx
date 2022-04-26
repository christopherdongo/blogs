import { BsFillAlarmFill } from 'react-icons/bs';
import {BetterLading, Posts} from '../components';

export const Home = () => {
  return (
    <>
      <header className='home__header'>
        <h2>Startup Framework. Suit Up Your Startup</h2>
        <p>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <BsFillAlarmFill />
        <div className='home__header__buttons'>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </header>
      <BetterLading />
      <Posts />
    </>
  );
};
