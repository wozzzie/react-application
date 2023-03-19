import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

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
          <NavLink
            to="/"
            data-testid="main-link"
            className={({ isActive }): string =>
              isActive ? "header__link_active" : "header__link"
            }
          >
            {home}
          </NavLink>
          <NavLink
            to="/about"
            data-testid="about-link"
            className={({ isActive }): string =>
              isActive ? "header__link_active" : "header__link"
            }
          >
            {about}
          </NavLink>
        </header>
      </>
    );
  }
}

export default Header;
