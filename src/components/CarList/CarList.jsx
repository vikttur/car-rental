import Card from '../Card/Card';
import css from './CarList.module.css';

const CarList = () => {
  return (
    <ul className={css.grid}>
      {/* {movies.map(({ id, original_title }) => (
        <li className={css.item} key={String(id)}> */}
      <li className={css.item}>
        <Card />
        {/* <Link state={{ from: location }} to={`/car/${id}`}>
            {original_title}
          </Link> */}
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      <li className={css.item}>
        <Card />
      </li>
      {/* ))} */}
    </ul>
  );
};

export default CarList;
