/**
 *
 * GotiSideBar
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function GotiSideBar(props) {
  const { data } = props;
  return (
    <div className="side__bar__container">
      {data.map((item, index) => {
        return <SideBarItem key={index} item={item} />;
      })}
    </div>
  );
}

const SideBarItem = ({ item }) => {
  return (
    <Link to={item.link}>
      <div className="side__bar__item">
        <div className="item__icon">
          <img src={item.icon} />
        </div>
        <div className="link__title">{item.title}</div>
      </div>
      <div className="item__seperator" />
    </Link>
  );
};

GotiSideBar.propTypes = {};

export default GotiSideBar;
