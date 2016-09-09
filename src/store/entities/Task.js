import { observable } from "mobx"

class Task {
  userId = observable()
  id = observable()
  title = observable()
  completed = observable()

  constructor(userId, id, title, completed){
    this.userId.set(parseInt(userId))
    this.id.set(parseInt(id))
    this.title.set(title)
    this.completed.set(completed)
  }
}

export default Task
