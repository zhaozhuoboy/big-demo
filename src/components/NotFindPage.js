import React, { PropTypes } from 'react'

class NotFindPage extends React.Component {
  render () {
    let style={
      width:"100%",
      textAlign:"center",
      minHeight:"450px",
      lineHeight:"450px",
    }
    return(
      <div style={style}>
        <h1>您访问的页面不存在...</h1>
      </div>
    )
  }
}

export default NotFindPage;
