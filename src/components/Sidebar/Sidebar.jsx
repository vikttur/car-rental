import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <nav>
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
      </nav>
    </aside>
  );
};

export default Sidebar;
