import React, { PropTypes } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import Home from './components/Home';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />

          <Home />

        <Footer />
      </div>
    )
  }
}

export default App;
