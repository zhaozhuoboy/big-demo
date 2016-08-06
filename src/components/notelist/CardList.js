import React, { PropTypes } from 'react';
import NoteCard from './NoteCard.js';
import map from 'lodash/fp/map';
import axios from 'axios';


//https://raw.githubusercontent.com/zhaozhuoboy/big-demo/master/posts/blogs.json




// for(let i = listData.length-1 ; i >= 0 ;i--){
//   cardlist.push(<NoteCard index={ listData[i].index }
//                           title={ listData[i].title }
//                           date={ listData[i].date }
//                           key={i}
//      />);
//   }
class CardList extends React.Component {
  constructor(){
    super();
    this.state={
      posts:''
    }
  }
  componentDidMount(){
    let address = `https://raw.githubusercontent.com/zhaozhuoboy/big-demo/master/posts/blogs.json`
    axios.get(address).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      });
    });
  }
  render () {
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <NoteCard title={b.title} date={b.created_at } index={b.id} key={Math.random()}/>
                  );
                },
        this.state.posts
    );


    // console.log(this.state.posts.length);
    // let cardlist =[];
    // if(this.props.pipei == ""){
    //   console.log('weikong');
      // map((a) => {
      //               cardlist.push(
      //                 <NoteCard index={a.index}
      //                           title={a.title}
      //                           date={a.date}
      //                           key={Math.random()}
      //                   />
      //               );
      //           },
      //           this.state.posts );
    // }else{
    //   let query=new RegExp(this.props.pipei,"i");
    //   for (var i = 0; i < this.state.posts.length; i++) {
    //
    //     if (query.test(this.state.posts[i].title)||query.test(this.state.posts[i].index)) {
    //       cardlist.push(<NoteCard title={this.state.posts[i].title} date={this.state.posts[i].date} index={this.state.posts[i].index} key={Math.random()}/>)
    //     }
    //   }
    // }

    return(
      <div>

        {blogCards}
      </div>

    )
  }
}

export default CardList;
