import React,{Component} from 'react';
import LeftNav from './LeftNav.js';

class Button extends Component {
  getStyle(){
    return{
      root:{
        display:"block",
        width:"50px",
        height:"30px",
        borderColor:"#919191",
        backgroundColor:"#919191"
      }
    }
  }
  handelClick(){
    this.refs.leftnav.handelToggle();
  }
  render(){
    const styles = this.getStyle();
    return(

      <div>
        <button style={styles.root} onClick={this.handelClick.bind(this)}>NAV</button>
        <LeftNav ref="leftnav"/>
      </div>
    )
  }
}
export default Button;
