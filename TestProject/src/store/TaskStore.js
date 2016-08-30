import { observable, computed } from "mobx"
import Task from "./entities/Task"

class TaskStore {
  isLoading = observable(true)
  tasks = observable([])
  userIdFilter = 0
  nextId = 0

  constructor() {
    this.loadTasks()
  }
  @computed get tasksFilteredByUser(){
    return this.tasks.filter(task => task.userId.get() === this.userIdFilter)
  }
  loadTasks() {
    this.isLoading.set(true)
    const source = "https://jsonplaceholder.typicode.com/todos"
    $.get(source, function (result) {
      result.forEach(json => this.createTaskFromJson(json))
      if(this.tasks.length === 0){
        this.nextId = 1
      } else {
        this.nextId = this.tasks[this.tasks.length - 1].id.get() + 1
      }
      this.isLoading.set(false)
    }.bind(this));
  }
  createTaskFromJson(json) {
    let task = this.tasks.find(task => task.id.get() === json.id);
    if (!task) {
        task = new Task(json.userId, json.id, json.title, json.completed);
        this.tasks.push(task);
    }
  }
  createTask(userId, title, completed) {
    const id = this.getNextId()
    var task = new Task(userId, id, title, completed);
    this.tasks.push(task);
    return task;
  }
  removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  getById(id) {
    return this.tasks.find(task => task.id.get() === id)
  }
  getByUserId(userId) {
    return this.tasks.find(task => task.userId.get() === userId)
  }
  getNextId(){
    return this.nextId++
  }
}

var taskStore = window.taskStore = new TaskStore

export default taskStore
