/**
 *
 * SignUpCompany
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import GotiButton from '../GotiButton/Loadable';

function SignUpCompany(props) {
  const { onCompanySignUpSubmit } = props;

  const [companyName, setCompanyName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  return (
    <>
      <form className="ui form">
        <div className="field">
          <input
            type="text"
            name="company-name"
            placeholder="Company Name"
            value={companyName}
            onChange={e => {
              setCompanyName(e.target.value);
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
            name="confirm-password"
            placeholder="Confirm Password"
            value={signupConfirmPassword}
            onChange={e => {
              setSignupConfirmPassword(e.target.value);
            }}
          />
        </div>

        <GotiButton
          text="Sign Up"
          onClick={e => {
            e.preventDefault();
            onCompanySignUpSubmit(
              companyName,
              signupEmail,
              signupPassword,
              signupConfirmPassword,
            );
          }}
        />
      </form>

      <div className="login__instead">
        <a href="/">
          <GotiButton text="Login, Instead" />
        </a>
      </div>
    </>
  );
}

SignUpCompany.propTypes = {
  onCompanySignUpSubmit: PropTypes.func,
};

export default SignUpCompany;
