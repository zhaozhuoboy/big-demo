import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import './stylesheet/common.css';

class App extends Component {
  render(){
    return(
      <div>
        <Button />
      </div>
    )
  }
}


ReactDOM.render(<App />,document.getElementById('app'));
