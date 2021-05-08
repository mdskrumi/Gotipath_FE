/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GotiSideBar from '../../components/GotiSideBar/Loadable';

import HomeImage from './images/home.png';
import PullZoneImage from './images/pullzone.png';
import StoreageImage from './images/storeage.png';

import GlobalStyle from '../../global-styles';

export default function App() {
  const user = {
    id: 1,
    user_name: 'Sakib',
  };
  // const user = null;

  const navBarData = [
    {
      title: 'Account',
      link: '#',
    },
  ];

  const sideBarData = [
    {
      title: 'Home',
      icon: HomeImage,
      link: '/',
    },
    {
      title: 'Pull Zone',
      icon: PullZoneImage,
      link: '/pull-zone',
    },
    {
      title: 'Storeage',
      icon: StoreageImage,
      link: '/storeage',
    },
  ];

  return !user ? (
    <>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  ) : (
    <div style={{ display: 'flex' }}>
      <div>
        <GotiSideBar data={sideBarData} />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    </div>
  );
}
