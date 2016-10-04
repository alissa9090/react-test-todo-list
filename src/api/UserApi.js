import fetch from "isomorphic-fetch"

export default class UserApi {
  restClient

  constructor(restClient){
    this.restClient = restClient
  }

  fetchUsers(){
    return this.restClient.get("users")
  }

  fetchUser(userId){
    return this.restClient.get(`users?id=${userId}`)
  }

  saveUser(json){
    return this.restClient.post("users", json)
  }

  // updateUser(json){
  //   return this.restClient.put("users", json)
  // }

  deleteUser(userId){
    return this.restClient.delete(`users?id=${userId}`)
  }
}
