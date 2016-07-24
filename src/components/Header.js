import React,{Component} from 'react';
class Header extends Component{

  render(){
    let styles={
      header:{
        width:"100%",
        height:"160px",
        backgroundColor:"#606060",
        color:"#fff",
        textAlign:"center",
        lineHeight:"160px"
      }
    }
    return(
      <header style={styles.header}>
        <h1>header</h1>
      </header>
    )
  }
}
export default Header;
