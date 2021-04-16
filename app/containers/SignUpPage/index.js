/**
 *
 * SignUpPage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUpPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import DynamicSwitch from '../../components/DynamicSwitch/Loadable';
import SignUpPersonal from '../../components/SignUpPersonal/Loadable';
import SignUpCompany from '../../components/SignUpCompany/Loadable';

export function SignUpPage() {
  useInjectReducer({ key: 'signUpPage', reducer });
  useInjectSaga({ key: 'signUpPage', saga });

  const SIGN_UP_OPTIONS = ['Personal', 'Company'];
  const [option, setOption] = useState(0);

  return (
    <div>
      <Helmet>
        <title>SignUpPage</title>
        <meta name="description" content="Description of SignUpPage" />
      </Helmet>
      <div className="signup__page__body">
        <div className="signup__page__title">
          <h1>Welcome to Gotipath</h1>
        </div>

        <div className="signup__page__switch">
          <DynamicSwitch
            options={SIGN_UP_OPTIONS}
            setSelectedIndex={setOption}
            selectedIndex={option}
          />
        </div>
        <div className="login__form__section">
          {SIGN_UP_OPTIONS[option] === 'Personal' && <SignUpPersonal />}
          {SIGN_UP_OPTIONS[option] === 'Company' && <SignUpCompany />}
        </div>
      </div>
    </div>
  );
}

// SignUpPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  signUpPage: makeSelectSignUpPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUpPage);
