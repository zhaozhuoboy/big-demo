import React, { PropTypes } from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import marked from 'marked';
import hljs from 'highlight.js';
import '../../css/posts.css';
import '../../css/highlight.css'

class Posts extends React.Component {
  constructor(){
    super();
    this.state={
      content:"",
      wait :true
    }
  }
  componentDidMount(){
    let mdName = this.props.params.title;
    //https://raw.githubusercontent.com/zhaozhuoboy/big-demo/master/posts/react%E5%AD%A6%E4%B9%A0%E4%B9%8B%E8%B7%AF.md
    let address = `https://raw.githubusercontent.com/zhaozhuoboy/big-demo/master/posts/${mdName}.md?v=${Math.random()}`;
    axios.get(address)
         .then((res) => {
           console.log(res);
           this.setState({
             content:res.data,
             wait:false
           })
         })
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    let markdown = marked(this.state.content);
    let styles={
      noteHeader:{
        width:"100%",
        height:"70px",
        textAlign:"center",
        lineHeight:"70px",
        fontSize:"30px",
        color:"#fff",
        backgroundColor:"#00CED1"
      },
      card:{
        width:"80%",
        margin:"0 auto",
        minHeight:"500px",
        boxShadow:"0px 3px 8px rgba(0,0,0,0.3)"
      }
    }
    console.log(this.props.params);
    return(
      <div>

      <div style={styles.noteHeader}>欢迎阅读</div>
        <div style={styles.card}>
          {this.state.wait ? <div>
                              <CircularProgress style={{left:"46%",marginTop:"160px"}}/>
                              <p style={{textAlign:"center",marginTop:"20px"}}>正在读取文章...</p>
                             </div>:""}
          <div className="posts-content">
            <span dangerouslySetInnerHTML={{__html: markdown}} />

          </div>

        </div>
      </div>
    )
  }
}

export default Posts;
