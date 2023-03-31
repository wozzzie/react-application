import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.css';

type HeaderProps = {
  home: string;
  about: string;
  card: string;
};

const Header: React.FC<HeaderProps> = ({ home, about, card }) => {
  const location = useLocation();

  let title: string;
  switch (location.pathname) {
    case '/':
      title = 'Home';
      break;
    case '/about':
      title = 'About';
      break;
    case '/card':
      title = 'Your card';
      break;
    default:
      title = '404';
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <p className="header__title">{title}</p>
        </div>
        <div className="header__links">
          <NavLink
            to="/"
            data-testid="main-link"
            className={({ isActive }): string =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            {home}
          </NavLink>
          <NavLink
            to="/about"
            data-testid="about-link"
            className={({ isActive }): string =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            {about}
          </NavLink>
          <NavLink
            to="/card"
            data-testid="card-link"
            className={({ isActive }): string =>
              isActive ? 'header__link_active' : 'header__link'
            }
          >
            {card}
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
