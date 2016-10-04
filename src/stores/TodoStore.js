import {observable} from 'mobx'
import Todo from './model/Todo'

export default class TodoStore {
  transportLayer
  @observable todos = []
  @observable isLoading = true

  constructor(transportLayer) {
    this.transportLayer = transportLayer
  }

  loadTodos() {
    this.isLoading = true
    return this.transportLayer.fetchTodos().then(fetchedTodos => {
      fetchedTodos.forEach(json => this.updateTodoFromServer(json))
      this.isLoading = false
    });
  }

  loadUserTodos(userId) {
    this.isLoading = true
    return this.transportLayer.fetchUserTodos(userId).then(fetchedTodos => {
      fetchedTodos.forEach(json => this.updateTodoFromServer(json))
      this.isLoading = false
    });
  }

  updateTodoFromServer(json) {
    var todo = this.todos.find(todo => todo.id === json.id)
    if (!todo) {
      todo = new Todo(this, json)
      this.todos.push(todo)
    }
  }

  createTodo() {
    var todo = new Todo(this)
    this.todos.push(todo)
    return todo
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }
}
