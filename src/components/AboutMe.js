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
      <Card style={{width:"90%",minHeight:"500px",margin:"100px auto",padding:"40px 0",}}>

        <h1 style={{textAlign:"center",color:"#666",fontSize:"50px"}}>关于我</h1>
        {this.state.wait ? <div>
                            <CircularProgress style={{left:"46%",marginTop:"160px"}}/>
                            <p style={{textAlign:"center",marginTop:"20px"}}>正在从GitHub获取信息...</p>
                           </div>: GitHubInfo}
        {/*再写一个自我简介*/}

      </Card>
    )
  }
}

export default AboutMe;
