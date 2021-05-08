/**
 *
 * GotiButton
 *
 */

import React from 'react';
import './style.css';

function GotiButton({ text, onClick, disabled }) {
  return (
    <button className="goti_button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

GotiButton.propTypes = {};

export default GotiButton;
