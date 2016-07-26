import React, { PropTypes } from 'react';
import NoteCard from './NoteCard.js';
import map from 'lodash/fp/map';

let listData =[
  {index:"1",title:"html学习笔记",date:"2016.07.12"},
  {index:"2",title:"box-shadow 学习笔记",date:"2016.07.13"},
  {index:"3",title:"css3学习笔记",date:"2016.07.15"},
  {index:"4",title:"javascript学习笔记",date:"2016.07.16"},
  {index:"5",title:"webpack环境搭建",date:"2016.07.22"}

];
let cardlist =[];

map((a) => {
    cardlist.push(
      <NoteCard index={a.index}
                title={a.title}
                date={a.date}
                key={Math.random()}
        />
    );
},listData );

// for(let i = listData.length-1 ; i >= 0 ;i--){
//   cardlist.push(<NoteCard index={ listData[i].index }
//                           title={ listData[i].title }
//                           date={ listData[i].date }
//                           key={i}
//      />);
//   }
class CardList extends React.Component {
  render () {
    return(
      <div>
        {cardlist}
      </div>

    )
  }
}

export default CardList;
