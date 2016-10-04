import React from 'react'
import UserStore from '../../stores/UserStore'
import TodoStore from '../../stores/TodoStore'
import UserApi from '../../api/UserApi'
import TodoApi from '../../api/TodoApi'
import RestClient from '../../api/RestClient'
import UserDetails from '../user/UserDetails'
import TodosView from '../todo/TodosView'
import GoBackButton from '../utility/GoBackButton'
import { Col } from 'react-bootstrap';

class UserTodosView extends React.Component {
  userStore
  todoStore
  userId
  constructor(){
    super();
    let restClient = new RestClient("https://jsonplaceholder.typicode.com")
    let userApi = new UserApi(restClient)
    let todoApi = new TodoApi(restClient)

    this.userStore = new UserStore(userApi)
    this.todoStore = new TodoStore(todoApi)

    this.createTodo = this.createTodo.bind(this)
  }
  componentDidMount(){
    this.userId = parseInt(this.props.params.userId)
    this.userStore.loadUser(this.userId)
    this.todoStore.loadUserTodos(this.userId)
  }
  createTodo(title){
    const newTodo = this.todoStore.createTodo()
    newTodo.updateFromJson({title, completed:false, userId: this.userId})
    newTodo.save()
  }
  render(){
    return (
      <div className="user-todos">
        <div className="page-header">
          <h1>Todos</h1>
        </div>
        <Col xs={3} md={2}>
          <UserDetails users={this.userStore.users}></UserDetails>
        </Col>
        <Col xs={12} md={8}>
          <div className="main">
            <TodosView todos={this.todoStore.todos} handleTodoCreate={this.createTodo}/>
          </div>
          <GoBackButton/>
        </Col>
      </div>
    )
  }
}

export default UserTodosView
