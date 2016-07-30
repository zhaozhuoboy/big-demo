import React, { PropTypes } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <AboutMe />
        {this.props.children}

        <Footer />
      </div>
    )
  }
}

export default App;
