// import Button from '../Button/Button';
import css from './ModalForm.module.css';

const ModalForm = () => {
  return (
    //  isHidden
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.img}>
          <img src="#" width="461" alt="img" />
        </div>
        <h2 className={css.model}>
          Buick <span className={css.itemColor}>Enclave</span>, 2008
        </h2>
        <div className={css.list}>
          <ul className={css.data}>
            <li className={css.item}>Kiev</li>
            <li className={css.item}>Ukraine</li>
            <li className={css.item}>id: 9582</li>
            <li className={css.item}>Year: 2008</li>
            <li className={css.item}>Type: Suv</li>
          </ul>
          <ul className={css.data}>
            <li className={css.item}>Fuel Consumption: 10.5</li>
            <li className={css.item}>Engine Size: 3.6L V6</li>
          </ul>
        </div>
        <p className={css.description}>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </p>
        <h3 className={css.title}>Accessories and functionalities:</h3>
        <div className={css.list}>
          <ul className={css.data}>
            <li className={css.item}>Leather seats</li>
            <li className={css.item}>Panoramic sunroof</li>
            <li className={css.item}>Power liftgate</li>
          </ul>
          <ul className={css.data}>
            <li className={css.item}>Premium audio system</li>
            <li className={css.item}>Remote start</li>
            <li className={css.item}>Blind-spot monitoring</li>
          </ul>
        </div>
        <h3 className={css.title}>Rental Conditions:</h3>

        <ul className={css.rental}>
          <li className={css.itemRental}>
            Minimum age : <span className={css.itemColor}>25</span>
          </li>
          <li className={css.itemRental}>
            Valid driver’s license<span className={css.itemColor}></span>
          </li>
          <li className={css.itemRental}>
            Security deposite required<span className={css.itemColor}></span>
          </li>
          <li className={css.itemRental}>
            Mileage: <span className={css.itemColor}>5,858</span>
          </li>
          <li className={css.itemRental}>
            Price: <span className={css.itemColor}>40$</span>
          </li>
        </ul>
        <button type="submit" className={css.btn}>
          Rental car
        </button>

        <button type="button" className={css.btnClose}>
          <svg className={css.iconClose} width="24" height="24">
            <use href="./src/images/icons.svg#close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
