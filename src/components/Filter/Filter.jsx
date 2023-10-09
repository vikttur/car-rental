// import Button from '../Button/Button';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.filter}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.label}>Car brand</p>
          <input className={css.option} placeholder="Enter the text"></input>
        </li>
        <li className={css.item}>
          <p className={css.label}>Price/ 1 hour</p>
          <input className={css.option} placeholder="To $"></input>
        </li>
        <li className={css.item}>
          <p className={css.label}>Сar mileage / km</p>
          <input className={css.option} placeholder="From"></input>
        </li>
      </ul>
      {/* <Button handleClick={ttt}>Search</Button> */}
    </div>
  );
};

export default Filter;

// <svg class="search-form__icon js-theme">
//   <use href="./images/sprite.svg#icon-search"></use>
// </svg>;
