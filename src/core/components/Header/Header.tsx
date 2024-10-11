import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo link after:hidden before:hidden">WebGL Homework</Link>
    </header>
  );
}

export default Header;
