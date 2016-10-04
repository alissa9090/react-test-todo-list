import RestClient from "./RestClient"

export default class TodoApi {
  restClient

  constructor(restClient){
    this.restClient = restClient
  }

  fetchTodos(){
    return this.restClient.get("todos")
  }

  fetchUserTodos(userId){
    return this.restClient.get(`todos?userId=${userId}`)
  }

  saveTodo(json){
    return this.restClient.post("saveTodo", json)
  }

  deleteTodo(todoId){
    return this.restClient.post("deleteTodo", todoId)
  }
}
