// import Button from '../Button/Button';
import css from './Card.module.css';

const Card = () => {
  return (
    <div className={css.card}>
      <div className={css.img}>
        <img src="#" width="274" alt="img" />
      </div>
      <div className={css.model}>
        <p>
          Buick <span className={css.itemColor}>Enclave</span>, 2008
        </p>
        <p className={css.lastItem}>$40</p>
      </div>
      <div className={css.list}>
        <ul className={css.data}>
          <li className={css.item}>Kiev</li>
          <li className={css.item}>Ukraine</li>
          <li className={css.item}>Luxury Car Rentals</li>
        </ul>
        <ul className={css.data}>
          <li className={css.item}>Suv</li>
          <li className={css.item}>Enclave</li>
          <li className={css.item}>9582</li>
          <li className={css.item}>Power liftgate</li>
        </ul>
      </div>
      <button type="button" className={css.btn}>
        Learn more
      </button>

      <button type="button" className={css.btnHeart}>
        <svg className={css.iconHeart} width="18" height="18">
          <use href="./src/images/heart.svg"></use>
        </svg>
      </button>
    </div>
  );
};

export default Card;
