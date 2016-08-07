import React, { PropTypes } from 'react';
import '../css/home.css';

class Home extends React.Component {
  render () {
    let styles={
      h1:{
        backgroundColor:"rgba(0,0,0,0.5)",
        marginTop:"40vh",
        paddingTop:"20px"
      },
      p:{
        fontSize:"40px",
        fontWeight:"800",
        color:"#DC143C",
        padding:"20px 0",
        backgroundColor:"rgba(0,0,0,0.5)",
      },
      h2:{
        color:"#666",
        textAlign:"center",
        fontSize:"30px",
        margin:"30px 0"
      }
    }
    return(
      <div>
        <div className="home-wrap">
          <div className="inner">
              <h1 style={styles.h1}>欢迎来到</h1>
              <p style={styles.p}>ZHAOZHUO'BLOG</p>
          </div>
        </div>
        <h2 style={styles.h2}>个人作品集</h2>
      </div>
    )
  }
}

export default Home;
