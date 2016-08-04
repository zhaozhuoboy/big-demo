import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      search:""
    }
  }
  cardSearch(inputTxt){
    this.setState({
      search:inputTxt
    })
  }
  render () {
    return(
      <div>
        <Header change={this.cardSearch.bind(this)}/>

    {/* <Home />
        <NoteList search={this.state.search}/>
        <Skill />
        <AboutMe />
        */}
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
