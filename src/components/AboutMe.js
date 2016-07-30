import React, { PropTypes } from 'react';
import '../css/about.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class AboutMe extends React.Component {
  _handleSubmit(e){
    e.preventDefault();
    const username = this.refs.username.getValue();
    console.log(username);
  }
  render () {
    let styles={
      btn:{
        marginLeft:"30px"
      }
    }
    return(
      <div className="container">
        <form onSubmit ={this._handleSubmit.bind(this)}>
          <TextField floatingLabelText="Github用户名："
                      ref="username"
          />
          <RaisedButton
            label="Github"
            secondary={true}
            style={styles.btn}
            type="submit"
            icon={<FontIcon className="material-icons">search</FontIcon>}
          />
        </form>
      </div>
    )
  }
}

export default AboutMe;
