import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import shared from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={shared.header}>
        <div className={shared.headerWrapper}>
          <nav className={shared.navigation}>
            <ul className={shared.navList}>
              <li>
                <NavLink className={shared.navListItem} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={shared.navListItem} to="/movies">
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
