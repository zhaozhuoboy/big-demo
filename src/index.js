import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './css/common.css';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class MyApp extends Component{
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
       <App />
    )
  }
}


MyApp.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
ReactDOM.render(<MyApp />,document.getElementById('root'));
