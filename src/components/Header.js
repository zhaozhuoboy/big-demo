import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import Logo from './header/Logo';
import Nav from './header/Nav';
import FontIcon from 'material-ui/FontIcon';
class Header extends Component{

  render(){
    let styles={
      header:{
        width:"100%",
        height:"60px",
        backgroundColor:"	#00CDCD",
        lineHeight:"60px",
      },
      logo:{
        color:"#fff",
        fontSize:"30px",
        textShadow:"1px 1px 20px rgba(0,0,0,0.3)",
        cursor:"pointer",
        marginLeft:"100px",
        float:"left"
      },
      nav:{
        float:"left",
        marginLeft:"80px"
      },
      hintStyle:{
        color:"#fff"
      },
      TextField:{
        marginLeft:"10%"
      },
      inputStyle:{
        color:"#fff"
      },
      underlineFocusStyle:{
        borderColor:"#fff",
      },
      search:{
        color:"#fff",
        marginLeft:-30,
        cursor:"pointer",
      }

    }
    return(
      <header style={styles.header} className="clearfix">
        <Logo style={styles.logo}/>
        <Nav style={styles.nav}/>
        <TextField hintText="搜索"
                   style={styles.TextField}
                   hintStyle={styles.hintStyle}
                   inputStyle={styles.inputStyle}
                   underlineFocusStyle={styles.underlineFocusStyle}
                   underlineStyle={styles.underlineStyle}
                   />
         <FontIcon className="material-icons" style={styles.search}>search</FontIcon>
      </header>
    )
  }
}
export default Header;
