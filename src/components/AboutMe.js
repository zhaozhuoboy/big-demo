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
import Repos from './about/Repos.js';

class AboutMe extends React.Component {
  constructor(){
    super();
    this.state={
      user:{},
      repos:{},
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
   axios.get(`https://api.github.com/users/zhaozhuoboy/repos`)
        .then(function(res){
          console.log(res);
          this.setState({
            repos:res.data,
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
        <div>
         <UserInfo userInfo={this.state.user}/>
         <Repos repos={this.state.repos}/>
        </div>
      )

    }
    return(
      <Card style={{width:"80%",minHeight:"500px",margin:"0 auto",padding:"40px 0"}}>


      {this.state.wait ? <CircularProgress style={{left:"44%",marginTop:"160px"}}/>: GitHubInfo}
      {/*再写一个自我简介*/}

      </Card>
    )
  }
}

export default AboutMe;
