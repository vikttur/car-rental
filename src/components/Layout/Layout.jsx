import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Sidebar />
      <main>
        <Suspense fallback={<Loader />}>
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

export default Layout;
