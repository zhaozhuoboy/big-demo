import React, { PropTypes } from 'react';
import CardList from './notelist/CardList.js';

class NoteList extends React.Component {
  render () {
    let styles={
      main:{
        width:"100%",

      }
    }
    return(
      <section style={styles.main}>
          <CardList />
      </section>
    )
  }
}

export default NoteList;
