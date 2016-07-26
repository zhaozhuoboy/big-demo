import React, { PropTypes } from 'react'
import Header from './components/Header';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />

          <NoteList />

        <Footer />
      </div>
    )
  }
}

export default App;
