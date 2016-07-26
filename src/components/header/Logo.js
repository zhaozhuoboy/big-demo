import React, { PropTypes } from 'react'

class Logo extends React.Component {
  getStyles(){
    return{
      logo:{
        color:"#fff",
        fontSize:"30px",
        textShadow:"1px 1px 20px rgba(0,0,0,0.3)",
        cursor:"pointer"
      }
    }
  }
  render () {
    const styles = this.getStyles();
    return(
      <h1 style={this.props.style}>My Blog</h1>
    )
  }
}
Logo.defaultProps={
    color:"#fff",
    fontSize:"30px",
    textShadow:"1px 1px 20px rgba(0,0,0,0.3)",
    cursor:"pointer"
};
Logo.propTypes={
  style:React.PropTypes.object.isRequired
}
export default Logo;
