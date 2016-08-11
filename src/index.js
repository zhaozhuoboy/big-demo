import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import injectTapEventPlugin from 'react-tap-event-plugin';
import './css/common.css';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js';

injectTapEventPlugin();



ReactDOM.render(<Router routes={routes} history={browserHistory} />
  ,document.getElementById('root'));
