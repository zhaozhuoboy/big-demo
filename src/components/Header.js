import React,{Component} from 'react';
import Logo from './header/Logo';
import Nav from './header/Nav';

class Header extends Component{
  constructor(props) {
      super(props);
      this.state = {open: false}
  }
  handleToggle(){
    this.setState({open: !this.state.open})
  }
  handleInput(event){
    let inputTxt = event.target.value;
    // console.log(inputTxt);
    // console.log(this.props.change);
    this.props.change(inputTxt);
  }

  render(){
    let styles={
      header:{
        position:"fixed",
        left:"0",
        top:"0",
        width:"100%",
        height:"60px",
        backgroundColor:"	#00CDCD",
        lineHeight:"60px",
        zIndex:"10000"
      },
      inner:{
        width:"80%",
        margin:"0 auto",
        minWidth:"500px"
      },
      logo:{
        color:"#fff",
        fontSize:"30px",
        textShadow:"1px 1px 20px rgba(0,0,0,0.3)",
        cursor:"pointer",

        float:"left"
      },
      nav:{
        float:"left",
        marginLeft:"80px"
      },

    }
    return(
      <header style={styles.header} className="clearfix">
        <div style={styles.inner}>
          <Logo style={styles.logo}/>
          <Nav style={styles.nav}/>

         </div>
      </header>
    )
  }
}
export default Header;
