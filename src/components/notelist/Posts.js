import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import GoBack from 'material-ui/svg-icons/navigation/arrow-back';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import marked from 'marked';
import hljs from 'highlight.js';
import {hashHistory} from 'react-router';
import '../../css/posts.css';
import '../../css/highlight.css';



class Posts extends React.Component {
  constructor(){
    super();
    this.state={
      content:"",
      wait :true
    }
  }
  goBack(){
    hashHistory.goBack();
  }
  componentDidMount(){
    let mdName = this.props.params.title; //拿到地址栏上的路径  路径对应markdown文件名
    let address = `https://raw.githubusercontent.com/zhaozhuoboy/note/master/notes/${mdName}.md?v=${Math.random()}`;
    axios.get(address)
         .then((res) => {
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
        backgroundColor:"#333"
      },
      card:{
        width:"90%",
        margin:"0 auto",
        minHeight:"500px",
        boxShadow:"0px 3px 8px rgba(0,0,0,0.3)"
      },
      goback:{
        position:"absolute",
        top:"0",
        right:"10px",
        width: 72,
        height: 72,
        padding: 16,
      },
      iconSize:{
        width: 36,
        height: 36,
      }
    }
    return(
      <div>

      <div style={styles.noteHeader}>欢迎阅读</div>
      <IconButton onClick={this.goBack.bind(this)}
                  tooltip	="返回博客列表"
                  style={styles.goback}
                  iconStyle={styles.iconSize}>
        <GoBack color="#fff"/>
      </IconButton>
        <div style={styles.card} className="card">
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
