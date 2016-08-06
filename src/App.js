import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './components/NavBar';
// import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  // constructor(){
  //   super();
  //   this.state={
  //     search:""
  //   }
  // }
  // cardSearch(inputTxt){
  //   this.setState({
  //     search:inputTxt
  //   })
  // }
  render () {
    return(
      <div>
        <NavBar />
          {this.props.children}

        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
