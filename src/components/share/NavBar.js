import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      btnColor:false,
      title:"首页"
    }
  }
  componentWillMount(){
    this.setNavBarState();
  }
  componentWillReceiveProps(nextProps){
    this.setNavBarState();
  }
  setNavBarState(){
    this.setState({
      btnColor:this.context.router.isActive('/',true) ? true :
                this.context.router.isActive('/skill') ? false:
                this.context.router.isActive('/notelist') ? false:
                this.context.router.isActive('/about') ? false:true,

      title:this.context.router.isActive('/',true) ? "首页":
            this.context.router.isActive('/skill') ? "技能":
            this.context.router.isActive('/notelist') ? "博客":
            this.context.router.isActive('/about') ? "关于":"笔记"
    })
  }
  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};
  render () {
    let styles={
      menu:{
        textAlign:'center'
      },
      smallIcon:{
        width:'32px',
        height:'32px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px',
        zIndex:"300"
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#333',
        marginBottom:'10px'
      }
    }
    return(
      <div>
        <IconButton tooltip="menu"
          onClick={this.handleToggle.bind(this)}
          iconStyle={styles.smallIcon}
          style={styles.small}>
          {this.state.btnColor ? <Menu color='#fff'/> : <Menu color='#333'/>}
        </IconButton>
        <Drawer
          docked={false}
          width={260}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div style={styles.menu}>
            <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>ZHAOZHUO@{this.state.title}</p>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/" style={styles.link} activeStyle={{color: '#E91E63'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/skill" style={styles.link} activeStyle={{color: '#E91E63'}}>技能</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/notelist" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
              <Link to="/about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}
NavBar.contextTypes={
  router:React.PropTypes.object.isRequired,
}
export default NavBar;
