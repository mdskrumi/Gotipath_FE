/**
 *
 * PersonalLogin
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GotiButton from '../GotiButton/Loadable';

function Login(props) {
  const { onLoginSubmit } = props;

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <>
      <form className="ui form">
        <div className="field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginEmail}
            onChange={e => {
              setLoginEmail(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginPassword}
            onChange={e => {
              setLoginPassword(e.target.value);
            }}
          />
          <div className="input__left__message">
            <p>Forget Password</p>
          </div>
        </div>

        <GotiButton
          text="Login"
          onClick={e => {
            e.preventDefault();
            onLoginSubmit(loginEmail, loginPassword);
          }}
        />
      </form>

      <div className="sign__up__instead">
        <a href="/sign-up">
          <GotiButton text=" Sign Up, Instead" />
        </a>
      </div>
    </>
  );
}

Login.propTypes = {
  onLoginSubmit: PropTypes.func,
};

export default Login;
