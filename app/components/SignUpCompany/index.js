/**
 *
 * SignUpCompany
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SignUpCompany() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SignUpCompany.propTypes = {};

export default SignUpCompany;
