import React, { PropTypes } from 'react';
import './nav.css';

class Nav extends React.Component {
  render () {
    return(
      <nav style={this.props.style}>

        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">技能</a></li>
          <li><a href="#">笔记列表</a></li>
          <li><a href="#">关于我</a></li>

        </ul>
      </nav>
    )
  }
}
Nav.propTypes={
  style:React.PropTypes.object.isRequired
}
export default Nav;
