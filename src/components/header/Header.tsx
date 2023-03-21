import React from 'react';
import { NavLink, UNSAFE_LocationContext } from 'react-router-dom';

import './Header.css';

type HeaderProps = {
  home: string;
  about: string;
};

class Header extends React.Component<HeaderProps> {
  render(): JSX.Element {
    const { home, about } = this.props;
    return (
      <>
        <header className="header">
          <div>
            <UNSAFE_LocationContext.Consumer>
              {(value) => (
                <p className="header__title">
                  {value.location.pathname === '/'
                    ? 'Home'
                    : value.location.pathname === '/about'
                    ? 'About'
                    : ''}
                </p>
              )}
            </UNSAFE_LocationContext.Consumer>
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
          </div>
        </header>
      </>
    );
  }
}

export default Header;
