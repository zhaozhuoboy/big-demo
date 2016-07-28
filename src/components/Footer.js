import React, { PropTypes } from 'react';
import wechatImg from '../images/wechat.jpg';

class Footer extends React.Component {
  render () {
    let styles={
      footer:{
        padding:"20px 0",
        width:"100%",
        height:"150px",
        textAlign:"center",
        backgroundColor:"#212121",
        color:"#fff",
      },
      inner:{
        width:"90%",
        margin:"0 auto"
      },
      img:{
        width:"120px",
        height:"120px",
      },
      footer_title:{

        fontSize:"26px",

      }

    }
      return(
        <footer style={styles.footer}>
          <div style={styles.inner}>
            <img src={wechatImg} style={styles.img}/>
            <h2 style={styles.footer_title}>WeChat ：zhaozhuoboy</h2>
          </div>
        </footer>
      )
  }
}

export default Footer;
