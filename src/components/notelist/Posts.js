import React, { PropTypes } from 'react'

class Posts extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render () {
    let styles={
      noteHeader:{
        width:"100%",
        height:"70px",
        textAlign:"center",
        lineHeight:"70px",
        fontSize:"30px",
        color:"#fff",
        backgroundColor:"#00CED1"
      }
    }
    return(
      <div>
        <div style={styles.noteHeader}>欢迎阅读</div>
      </div>
    )
  }
}

export default Posts;
