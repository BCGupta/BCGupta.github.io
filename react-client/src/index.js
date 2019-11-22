import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import 'core-js/fn/number/is-nan'; import 'core-js/es7/'; import 'core-js/es6/'; import 'raf/polyfill';

ReactDOM.render(<App />, document.getElementById('app'));