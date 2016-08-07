import React, { PropTypes } from 'react';
import '../../css/card.css';
import {hashHistory} from 'react-router';
class NoteCard extends React.Component {
  hindleClickCard(){
    console.log(hashHistory);
    let url = hashHistory.push(`notelist/${this.props.title}`)
  }
  render () {
      return(
        <div className="card-wrap" onClick={this.hindleClickCard.bind(this)}>
          <div className="left">{this.props.index}</div>
          <div className="right">
            <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
          </div>
        </div>
      )
  }
}
NoteCard.defaultProps={
  index:"1",
  title:"这是标题",
  date:"这是日期"
}
NoteCard.propTypes={
  index:React.PropTypes.number.isRequired,
  title:React.PropTypes.string.isRequired,
  date:React.PropTypes.string.isRequired
}
export default NoteCard;
