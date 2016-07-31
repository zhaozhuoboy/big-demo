import React, { PropTypes } from 'react';
import '../../css/userinfo.css';

class UserInfo extends React.Component {
  render () {
    const userInfo = this.props.userInfo;
    return(
      <div className="user-info">
        <img src={userInfo.avatar_url}/>
        <ul>
          <li>
            <p>{userInfo.followers}</p>
            <b>粉丝数</b>
          </li>
          <li>
            <p>{userInfo.following}</p>
            <b>关注数</b>
          </li>
          <li>
            <p>{userInfo.public_repos}</p>
            <b>仓库数</b>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserInfo;
