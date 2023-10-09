// import Button from '../Button/Button';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.filter}>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.label}>Car brand</p>
          <ul className={css.optionBrand}>
            <li className={css.selectedOption}>
              <span>Enter the text</span>
              {/* <ul><li></li></ul> */}
              <button type="button" className={css.btnChevron}>
                <svg className={css.iconChevron} width="20" height="20">
                  <use href=".src/images/chevron.svg"></use>
                </svg>
              </button>
            </li>
          </ul>
        </li>
        <li className={css.item}>
          <p className={css.label}>Price/ 1 hour</p>
          <ul className={css.optionPrice}>
            <li className={css.selectedOption}>
              <span>To $</span>
              {/* <ul><li></li></ul> */}
              <button type="button" className={css.btnChevron}>
                <svg className={css.iconChevron} width="20" height="20">
                  <use href=".src/images/chevron.svg"></use>
                </svg>
              </button>
            </li>
          </ul>
        </li>
        <li className={css.item}>
          <p className={css.label}>Сar mileage / km</p>
          <ul className={css.optionMiles}>
            <li className={css.optionFrom}>
              <span>From</span>
            </li>
            <li className={css.optionTo}>
              <span>To</span>
            </li>
          </ul>
        </li>
      </ul>
      {/* <Button handleClick={ttt}>Search</Button> */}
    </div>
  );
};

export default Filter;
