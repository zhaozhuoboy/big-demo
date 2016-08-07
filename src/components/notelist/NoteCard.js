import React, { PropTypes } from 'react';
import '../../css/card.css';
import {hashHistory} from 'react-router';//用上下文的router  就不用引用这个了
class NoteCard extends React.Component {
  hindleClickCard(){
    this.context.router.push(`notelist/${this.props.title}`)
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
NoteCard.contextTypes={
  router:React.PropTypes.object.isRequired,
}
export default NoteCard;
