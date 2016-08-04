import React, { PropTypes } from 'react';
import '../css/about.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Card from 'material-ui/Card';
import UserInfo from './about/UserInfo.js';
import axios from 'axios';
import isEmpty from 'lodash/fp/isEmpty';
import CircularProgress from 'material-ui/CircularProgress';

class AboutMe extends React.Component {
  constructor(){
    super();
    this.state={
      user:{},
      wait:true
    }
  }
  componentDidMount(){
  //  e.preventDefault();
  //  const username = this.refs.username.getValue();
    axios.get(`https://api.github.com/users/zhaozhuoboy`)
         .then(function(res){
           console.log(res);
           this.setState({
             user:res.data,
             wait:false
           })
         }.bind(this))
  }
  render() {
    let styles={
      btn:{
        marginLeft:"30px"
      }
    }
    let GitHubInfo;
    if(!isEmpty(this.state.user)){
      GitHubInfo=(
         <UserInfo userInfo={this.state.user}/>
      )

    }
    return(
      <Card style={{width:"80%",height:"550px",margin:"0 auto",padding:"40px 0"}}>
    {/*  <div className="container">
        <form onSubmit ={this._handleSubmit.bind(this)}>
          <TextField floatingLabelText="Github用户名："
                      ref="username"
          />
          <RaisedButton
            label="查看GitHub信息"
            secondary={true}
            style={styles.btn}
            type="submit"
            icon={<FontIcon className="material-icons">search</FontIcon>}
          />
        </form>
      </div>*/}

      {this.state.wait ? <CircularProgress style={{left:"44%",marginTop:"160px"}}/>: GitHubInfo}
      {/*再写一个自我简介*/}

      </Card>
    )
  }
}

export default AboutMe;
