import { observable } from "mobx"

class Task {  
  userId = observable()
  id = observable()
  title = observable()
  completed = observable()

  constructor(userId, id, title, completed){
    this.userId = userId
    this.id = id
    this.title = title
    this.completed = completed
  }
}

export default Task
