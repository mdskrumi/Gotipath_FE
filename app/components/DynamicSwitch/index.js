/**
 *
 * DynamicSwitch
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DynamicSwitch(props) {
  const { options = [], setSelectedIndex, selectedIndex } = props;
  return (
    <div className="toggle__switch">
      {options.map((option, index) => (
        <div
          key={index}
          className={selectedIndex === index ? 'selected' : 'unselected'}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

DynamicSwitch.propTypes = {};

export default DynamicSwitch;
