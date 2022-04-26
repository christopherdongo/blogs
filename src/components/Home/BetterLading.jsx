import { AiFillHeart, AiOutlineStar } from 'react-icons/ai';
import {FaGlideG} from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi';
import { CardCategorias } from './CardCategorias';
import { categorias } from '../../data/index';
export const BetterLading = () => {
  return (
    <section className='better__home'>
      <div className='better__home__icons'>
        <BiCodeAlt className='better__images--code' width={35} height={38} />
        <AiFillHeart className='better__images--heart' width={35} height={38} />
        <AiOutlineStar
          className='better__images--start'
          width={35}
          height={38}
        />
      </div>
      <h2>Better Landing for Your Startup</h2>
      <p>
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </p>

      <div className='better__home__category'>
        <h3>categoria</h3>
          <div className='category__list'>
          {categorias.map((item, index) => (
          <CardCategorias key={index} {...item} />
        ))}
          </div>
      </div>

     <div className='productive__home__signup'>
      <div className='productive__home__container'>
      <div className='productive__logo'>
         <FaGlideG />
       </div>
       <h3>Be more productive <span>Lookback is free to try for 14 days</span></h3>
      <div className='productive__button__signup'>
      <button>
         Sign up
       </button>
      </div>
      </div>
     </div>
    </section>
  );
};
