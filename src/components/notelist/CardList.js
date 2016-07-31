import React, { PropTypes } from 'react';
import NoteCard from './NoteCard.js';
import map from 'lodash/fp/map';

let listData =[
  {index:"1",title:"html学习笔记",date:"2016.07.12"},
  {index:"2",title:"box-shadow 学习笔记",date:"2016.07.13"},
  {index:"3",title:"css4学习笔记",date:"2016.07.15"},
  {index:"4",title:"javascript学习笔记",date:"2016.07.16"},
  {index:"5",title:"webpack环境搭建",date:"2016.07.22"}

];




// for(let i = listData.length-1 ; i >= 0 ;i--){
//   cardlist.push(<NoteCard index={ listData[i].index }
//                           title={ listData[i].title }
//                           date={ listData[i].date }
//                           key={i}
//      />);
//   }
class CardList extends React.Component {
  render () {
    let cardlist =[];
    if(this.props.pipei == ""){
      console.log('weikong');
      map((a) => {
          cardlist.push(
            <NoteCard index={a.index}
                      title={a.title}
                      date={a.date}
                      key={Math.random()}
              />
          );
      },listData );
    }else{
      let query=new RegExp(this.props.pipei,"i");
      for (var i = 0; i < listData.length; i++) {

        if (query.test(listData[i].title)||query.test(listData[i].index)) {
          cardlist.push(<NoteCard title={listData[i].title} date={listData[i].date} index={listData[i].index} key={Math.random()}/>)
        }
      }
    }

    return(
      <div>

        {cardlist}
      </div>

    )
  }
}

export default CardList;
