import Sidebar from '../Sidebar/Sidebar';
import css from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={css.flex}>
      <Sidebar />
      <section className={css.container}>{children}</section>
    </div>
  );
};

export default Container;
