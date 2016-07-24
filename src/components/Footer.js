import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      width:"100%",
      height:"120px",
      textAlign:"center",
      backgroundColor:"#666",
      color:"#fff",
      lineHeight:"120px"
    }
      return(
        <footer style={styles}>
          <h1>footer</h1>
        </footer>
      )
  }
}

export default Footer;
