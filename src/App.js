import React, { PropTypes } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';

class App extends React.Component {
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
        {/*<NoteList search={this.state.search}/>*/}
        <Skill />

        <Footer />
      </div>
    )
  }
}

export default App;
