import React, { PropTypes } from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import '../../css/work.css';

class Work extends React.Component {
  render () {
    return(
      <div className='work-container'>
        <Card className="card">
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="http://obmtlh6zk.bkt.clouddn.com/2.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="http://obmtlh6zk.bkt.clouddn.com/weimei.jpg" />
          </CardMedia>
        </Card>
        <Card className="card">
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="http://obmtlh6zk.bkt.clouddn.com/weimei4.jpg" />
          </CardMedia>
        </Card>

      </div>
    )
  }
}

export default Work;
