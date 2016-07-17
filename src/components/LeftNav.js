import React,{Component} from 'react';

class LeftNav extends Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handelToggle(){
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    let show = this.state.show ? "-250px":"0px";
    let coverShow = this.state.show ? "none":"block";
    let styles ={
      root:{
        margin:"0",
        position:"fixed",
        height:"100%",
        width:"250px",
        backgroundColor:"#696969",
        top:"0",
        left:"0",
        bottom:"0",
        marginLeft:show,
        transition:"margin-left 0.3s"
      },
      title:{
        color:"#fff",
        fontSize:"40px",
        padding:"10px 0",
        width:"100%",
        textAlign:"center"
      },
      ulList:{
        listStyle:"none",
        margin:"0",
        padding:"0",
        textAlign:"center"
      },
      navItem:{
        padding:"10px 0",
        // backgroundColor:"#ADADAD" active 设置成这个颜色
      },
      cover:{
        position:"absolute",
        top:"0",
        left:"0",
        bottom:"0",
        right:"0",
        backgroundColor:"#000",
        opacity:"0.3",
        display:coverShow
      },
      alink:{
        textDecoration:"none",
        color:"#fff",
        fontSize:"22px"

      }
    }
    return(
      <div>
        <div style={styles.cover} onClick={this.handelToggle.bind(this)}></div>
        <div style={styles.root}>
          <h1 style={styles.title}>MY BLOG</h1>
          <ul style={styles.ulList}>
            <li style={styles.navItem}><a href="http://www.baidu.com" style={styles.alink}>首 页</a></li>
            <li style={styles.navItem}><a href="#" style={styles.alink}>关 于</a></li>
            <li style={styles.navItem}><a href="#" style={styles.alink}>注 册</a></li>
            <li style={styles.navItem}><a href="#" style={styles.alink}>登 录</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default LeftNav;
