import React from 'react';
import TodoEditForm from './form/TodoEditForm';
import { observer } from 'mobx-react';

const TodoList = observer(({todos}) => (
  <div className="todo-list">
    {todos.map(todo => <TodoEditForm
      key={todo.id}
      todo={todo} /> )}
  </div>
))

TodoList.propTypes = {
  todos: React.PropTypes.object.isRequired
}

export default TodoList
