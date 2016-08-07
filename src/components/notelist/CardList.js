import React, { PropTypes } from 'react';
import NoteCard from './NoteCard.js';
import map from 'lodash/fp/map';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';

class CardList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:'',
      wait:true
    }
  }
  componentDidMount(){
    let address = `https://raw.githubusercontent.com/zhaozhuoboy/note/master/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      this.setState({
        posts: res.data,
        wait:false
      });
    });
  }
  render () {

    let cardlist =[];
    if(this.props.pipei == ""){
      map((a) => {
                    cardlist.push(
                      <NoteCard index={a.index}
                                title={a.title}
                                date={a.date}
                                key={Math.random()}
                        />
                    );
                },
                this.state.posts );
    }else{

      for (var i = 0; i < this.state.posts.length; i++) {
        let posts = this.state.posts[i];
        if (posts.title.indexOf(this.props.pipei)!= -1 || posts.index == this.props.pipei) {
          cardlist.push(<NoteCard title={this.state.posts[i].title} date={this.state.posts[i].date} index={this.state.posts[i].index} key={Math.random()}/>)
        }
      }
    }

    return(
      <div>
        {this.state.wait ? <div>
                            <CircularProgress style={{left:"46%",marginTop:"50px"}}/>
                            <p style={{textAlign:"center",marginTop:"20px"}}>正在读取博客列表...</p>
                           </div> :
                           cardlist}
      </div>

    )
  }
}

export default CardList;
