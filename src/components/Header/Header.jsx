import { NavLink } from 'react-router-dom';

import LanguageSwitcher from 'components/LanguageSwitcher';
import './Header.scss';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-brand">RB</h1>
      <ul className="Header-navbar">
        <li className="Header-navbar-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="Header-navbar-item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <div className="Header-navbar-right">
        <NavLink className="Header-navbar-item" to="/login">
          Login
        </NavLink>
        <NavLink className="Header-navbar-item" to="/signup">
          Signup
        </NavLink>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
