import React from 'react';
import TaskList from '../components/TaskList';
import UserDetails from '../components/UserDetails';
import {withRouter} from 'react-router';
import { Col } from 'react-bootstrap';

class UserTasks extends React.Component {
  render(){
    const userId = parseInt(this.props.params.userId)
    return(
      <div class="user-tasks">
        <div class="page-header">
          <h1>Tasks</h1>
        </div>
        <Col xs={3} md={2}>
          <UserDetails userId={userId}></UserDetails>
        </Col>
        <Col xs={12} md={8}>
          <div className="main">
            <TaskList userId={userId}></TaskList>            
          </div>
          <button class="btn btn-default" onClick={this.props.router.goBack}>Go back</button>
        </Col>
      </div>
    )
  }
}

export default withRouter(UserTasks)
