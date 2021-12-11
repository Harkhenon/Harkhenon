import React from 'react';
import { Icon } from 'semantic-ui-react';

import './scss/Header.scss';

const Header = () => (
  <header>
    <nav className="menu">
      <a href="#home">Home</a>
      <a href="#whoami">About me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
