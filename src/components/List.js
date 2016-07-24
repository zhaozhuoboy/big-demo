import React, { PropTypes } from 'react'

class List extends React.Component {
  render () {
    let styles={
      main:{
        width:"100%",
        height:"500px",
        textAlign:"center",
        backgroundColor:"#212121"
      }
    }
    return(
      <section style={styles.main}>
        list
      </section>
    )
  }
}

export default List;
