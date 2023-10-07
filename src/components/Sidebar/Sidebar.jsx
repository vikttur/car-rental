import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import css from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.start}>
      <ul className={css.navigation}>
        <li className={css.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>

      <main>
        <Suspense fallback={<Loader />}>
          <h1>Congratulations after routing the project!</h1>
          <Outlet />
        </Suspense>
      </main>

      {/* <footer>
        <ul>
          <li>
            <p>1</p>
          </li>
          <li>
            <p>2</p>
          </li>
          <li>
            <p>3</p>
          </li>
        </ul>
      </footer> */}
    </div>
  );
};

export default Sidebar;
