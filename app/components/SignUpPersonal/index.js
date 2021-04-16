/**
 *
 * SignUpPersonal
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SignUpPersonal(props) {
  const { onPersonalSignUpSubmit } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  return (
    <>
      <form className="ui form">
        <div className="field">
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupEmail}
            onChange={e => {
              setSignupEmail(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupPassword}
            onChange={e => {
              setSignupPassword(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={signupConfirmPassword}
            onChange={e => {
              setSignupConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="ui button"
          type="submit"
          onClick={e => {
            e.preventDefault();
            onPersonalSignUpSubmit(
              firstName,
              lastName,
              signupEmail,
              signupPassword,
              signupConfirmPassword,
            );
          }}
        >
          Sign Up
        </button>
      </form>

      <div className="login__instead">
        <a href="/">
          <button className="ui button" type="button">
            Login, Instead
          </button>
        </a>
      </div>
    </>
  );
}

SignUpPersonal.propTypes = {
  onPersonalSignUpSubmit: PropTypes.func,
};

export default SignUpPersonal;
