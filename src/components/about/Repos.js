import React, { PropTypes } from 'react';
import map from 'lodash/map';
import '../../css/repos.css';

class Repos extends React.Component {
  render () {
    let repoList = map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <div>
            <p className='name'><a href={repo.html_url} target="_blank">{repo.name}</a></p>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    });
    return(
      <div>
        <ul className="repos-list">
          {repoList}
        </ul>
      </div>
    )
  }
}

export default Repos;
