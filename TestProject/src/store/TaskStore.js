import { observable } from "mobx"
import Task from "./entities/Task"

class TaskStore {
  isLoading = observable(true);
  tasks = observable([])

  constructor() {
    this.loadTasks();
  }
  loadTasks() {
    this.isLoading = true;
    const source = "https://jsonplaceholder.typicode.com/todos"
    $.get(source, function (result) {
      result.forEach(json => this.updateTaskFromServer(json));
      this.isLoading = false;
    }.bind(this));
  }
  updateTaskFromServer(json) {
    let task = this.tasks.find(task => task.id === json.id);
    if (!task) {
        task = new Task(json.userId, json.id, json.title, json.completed);
        this.tasks.push(task);
    }
  }
  createTask(userId, id, title, completed) {
      var task = new Task(userId, id, title, completed);
      this.tasks.push(task);
      return task;
  }
  removeTodo(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);      
  }
  getByUserId(userId) {
    return this.tasks.filter(task => task.userId === userId)
  }
}

var taskStore = window.taskStore = new TaskStore

export default taskStore
