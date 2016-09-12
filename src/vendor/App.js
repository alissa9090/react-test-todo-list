import React from 'react';
import Site from './Site';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import UserList from '../pages/UserList';
import UserTasks from '../pages/UserTasks';
import UpdateUser from '../pages/UpdateUser';
import userStore from '../store/UserStore';
import taskStore from '../store/TaskStore';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Site}>
      <IndexRoute component={UserList}/>
      <Route path="userTasks/:userId" component={UserTasks} />
      <Route path="updateUser/:mode(/:userId)" component={UpdateUser} />
    </Route>
  </Router>
)

export default App
