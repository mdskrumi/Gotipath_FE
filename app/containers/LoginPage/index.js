/**
 *
 * LoginPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import DynamicSwitch from '../../components/DynamicSwitch/Loadable';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const options = ['Personal', 'Company'];
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div>
      <Helmet>
        <title>Login | Gotipath</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <div className="login__page__body">
        <div className="login__page__title">
          <h1>Welcome to Gotipath</h1>
        </div>
        <div className="login__page__switch">
          <DynamicSwitch
            options={options}
            setSelectedIndex={setSelectedOption}
            selectedIndex={selectedOption}
          />
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
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

export default compose(withConnect)(LoginPage);
