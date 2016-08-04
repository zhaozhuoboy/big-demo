import React, { PropTypes } from 'react';
import './nav.css';
import { Link } from 'react-router';

class Nav extends React.Component {
  render () {
    return(
      <nav style={this.props.style}>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/notelist">Blog</Link></li>
          <li><Link to="/about">About</Link></li>

        </ul>
      </nav>
    )
  }
}
Nav.propTypes={
  style:React.PropTypes.object.isRequired
}
export default Nav;
