import React, { PropTypes } from 'react';

class Footer extends React.Component {
  render () {
    let styles={
      footer:{
        padding:"20px 0",
        width:"100%",
        height:"120px",
        textAlign:"center",
        backgroundColor:"#212121",
        color:"#fff",
      },
      inner:{
        width:"90%",
        margin:"0 auto"
      },
      h2:{
        color:"#ddd",
        fontSize:"30px",
        padding:"10px 0"
      },
      footer_title:{
        fontSize:"20px",
        marginTop:"20px"
      }

    }
      return(
        <footer style={styles.footer}>
          <div style={styles.inner}>
            <h2 style={styles.h2}>成功永远属于马上行动的人</h2>
            <p style={styles.footer_title}>欢迎加我的微信 ：zhaozhuoboy</p>
          </div>
        </footer>
      )
  }
}

export default Footer;
