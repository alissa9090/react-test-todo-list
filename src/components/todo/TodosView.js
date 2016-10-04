import React from 'react';
import TodoNewForm from './form/TodoNewForm';
import TodoList from './TodoList';

const TodosView = ({handleTodoCreate, todos}) => (
  <div className="todo-list">
    <TodoNewForm handleTodoCreate={handleTodoCreate}/>
    <TodoList todos={todos}/>
  </div>
)

TodosView.propTypes = {
  todos: React.PropTypes.object.isRequired,
  handleTodoCreate: React.PropTypes.func.isRequired
}

export default TodosView
