import React, { PropTypes } from 'react';
import '../../css/card.css';
class NoteCard extends React.Component {
  render () {
      return(
        <div className="card-wrap">
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
  index:React.PropTypes.string.isRequired,
  title:React.PropTypes.string.isRequired,
  date:React.PropTypes.string.isRequired
}
export default NoteCard;
