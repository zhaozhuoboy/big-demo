import React, { PropTypes } from 'react';
import CardList from './notelist/CardList.js';
import TextField from 'material-ui/TextField';

class NoteList extends React.Component {
  constructor(){
    super();
    this.state={
      search:""
    }
  }
  handleInput(e){
    let inputTxt = e.target.value;
    this.setState({search:inputTxt})
  }
  render () {
    let styles={
      main:{
        width:"100%",
      },
      search:{
        width:"60%",
        height:"100px",
        margin:"0 auto"
      },
      textfield:{
        marginTop:"30px"
      }
    }
    return(
      <section style={styles.main}>
        <div style={styles.search}>
          <TextField fullWidth={true}
                     style={styles.textfield}
                     floatingLabelText="Search Blog"
                     onChange={this.handleInput.bind(this)}
                      />
        </div>
        <CardList pipei={this.state.search}/>
      </section>
    )
  }
}

export default NoteList;
