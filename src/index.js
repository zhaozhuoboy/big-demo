import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import injectTapEventPlugin from 'react-tap-event-plugin';
import './css/common.css';
import {Router,hashHistory} from 'react-router';
import routes from './routes.js';

injectTapEventPlugin();



ReactDOM.render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
