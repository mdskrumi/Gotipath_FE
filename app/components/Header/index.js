/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {
  const { data } = props;

  return (
    <div className="header__container">
      <Link to="#">
        <h1>Gotipath</h1>
      </Link>
      <div className="header__list">
        {data.map((item, index) => (
          <HeaderItem item={item} />
        ))}
      </div>
    </div>
  );
}

const HeaderItem = ({ item }) => (
  <Link to={item.link}>
    <div className="header__list__item">{item.title}</div>
  </Link>
);

Header.propTypes = {};

export default Header;
