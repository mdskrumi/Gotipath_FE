import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  /* Own Styles */

  .login__page__body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    min-height: 100vh;
    margin: auto;
  }

  .login__page__title{
    text-align: center;
    margin: 3.5rem auto;
  }


  .toggle__switch {
    background-color: #F2F2F2;
    border-radius: 37px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 5px;
    margin: 10px auto 10px auto;
    /* width: 100%; */
  }

  .selected {
    color: #F7791E;
    font-weight: bold;
    width: 50%;
    padding: 10px;
    background-color: white;
    border-radius: 30px;
  }

  .unselected {
    color: #707D8C;
    font-weight: bold;
    width: 50%;
    padding: 10px;
    background-color: #F2F2F2;
    border-radius: 30px;
    cursor: pointer;
  }


  .login__form__section{
    width: 50vw;
    min-width: 300px;
    max-width: 400px;
    text-align: center;
  }

  .input__left__message{
    text-align: right;
  }

  .sign__up__instead{
    margin: 1.5rem auto;
  }



`;

export default GlobalStyle;
