import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible="true"
        strokeColor="#5364c3"
        strokeWidth="5"
        animationDuration="0.5"
        width="96"
      />
    </div>
  );
};

export default Loader;
