import { observable, computed } from "mobx"
import Task from "./entities/Task"

class TaskStore {
  isLoading = observable(true);
  tasks = observable([]);
  userId = observable(0);

  constructor() {
    this.loadTasks();
  }
  @computed get tasksFilteredByUser(){
    return this.tasks.filter(task => task.userId === this.userId)
  }
  loadTasks() {
    this.isLoading = true;
    const source = "https://jsonplaceholder.typicode.com/todos"
    $.get(source, function (result) {
      result.forEach(json => this.createTaskFromJson(json));
      this.isLoading = false;
    }.bind(this));
  }
  createTaskFromJson(json) {
    let task = this.tasks.find(task => task.id === json.id);
    if (!task) {
        task = new Task(json.userId, json.id, json.title, json.completed);
        this.tasks.push(task);
    }
  }
  createTask(userId, title, completed) {
    const id = this.tasks[this.tasks.length - 1].id + 1;
    var task = new Task(userId, id, title, completed);
    this.tasks.push(task);
    return task;
  }
  removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  getById(id) {
    return this.tasks.filter(task => task.id === id)
  }
  getByUserId(userId) {
    return this.tasks.filter(task => task.userId === userId)
  }
}

var taskStore = window.taskStore = new TaskStore

export default taskStore
