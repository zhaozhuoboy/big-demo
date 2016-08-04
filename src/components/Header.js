import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import Logo from './header/Logo';
// import Nav from './header/Nav';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';



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
        width:"100%",
        height:"60px",
        backgroundColor:"	#00CDCD",
        lineHeight:"60px",
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
      hintStyle:{
        color:"#fff",
      },
      TextField:{
        position:"relative",
        // marginLeft:"8%",
        // height:"36px",
        // lineHeight:"20px",
        top:"-4px",
        left:"8%",
        width:"50%"
      },
      inputStyle:{
        color:"#fff",
      },
      underlineFocusStyle:{
        borderColor:"#fff",
      },
      search:{
        color:"#fff",
        marginLeft:"6%",
        cursor:"pointer",
      },
      icon:{
      //  marginLeft:'5%',
      position:"relative",
      left:"4%",
       width: '52px',
       height: '52px',
     },
     svg: {
       width: '32px',
       height: '32px',
     },
     link:{
       display:"block",
       textAlign:"center",
       color:"#424242",
       textDecoration:"none"
     }

    }
    return(
      <header style={styles.header} className="clearfix">
        <div style={styles.inner}>
          <Logo style={styles.logo}/>
          {/*<Nav style={styles.nav}/>*/}
          <TextField hintText="搜索"
                     style={styles.TextField}
                     hintStyle={styles.hintStyle}
                     inputStyle={styles.inputStyle}
                     underlineFocusStyle={styles.underlineFocusStyle}
                     underlineStyle={styles.underlineStyle}
                     onChange={this.handleInput.bind(this)}
                     />
           <FontIcon className="material-icons" style={styles.search}>search</FontIcon>
           <IconButton tooltip="Menu" style={styles.icon} iconStyle={styles.svg} onClick={this.handleToggle.bind(this)}>
             <MenuButton color="#fff" />
           </IconButton>
           <Drawer width={250}
              openSecondary={true}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              docked={false} >
                <h1 style={{textAlign:"center",backgroundColor:"rgb(0, 205, 205)",fontSize:"24px",color:"#fff"}}>我的个人主页</h1>
                <MenuItem onTouchTap={this.handleToggle.bind(this)}><Link to="/" style={styles.link}>首页</Link></MenuItem>
                <MenuItem onTouchTap={this.handleToggle.bind(this)}><Link to="/skill" style={styles.link}>技术</Link></MenuItem>
                <MenuItem onTouchTap={this.handleToggle.bind(this)}><Link to="/notelist" style={styles.link}>笔记列表</Link></MenuItem>
                <MenuItem onTouchTap={this.handleToggle.bind(this)}><Link to="/about" style={styles.link}>关于</Link></MenuItem>
            </Drawer>
         </div>
      </header>
    )
  }
}
export default Header;
