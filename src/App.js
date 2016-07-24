import React, { PropTypes } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}

export default App;
