import {observable} from 'mobx'
import User from './model/User'

export default class UserStore {
  transportLayer
  @observable users = []
  @observable isLoading = true

  constructor(transportLayer) {
    this.transportLayer = transportLayer
  }

  loadUsers() {
    this.isLoading = true
    return this.transportLayer.fetchUsers().then(fetchedUsers => {
      fetchedUsers.forEach(json => this.updateUserFromServer(json))
      this.isLoading = false
    });
  }

  loadUser(userId) {
    this.isLoading = true
    return this.transportLayer.fetchUser(userId).then(fetchedUsers => {
      fetchedUsers.forEach(json => this.updateUserFromServer(json))
      this.isLoading = false
    });
  }

  updateUserFromServer(json) {
    var user = this.users.find(user => user.id === json.id)
    if (!user) {
      user = new User(this, json)
      this.users.push(user)
    }
  }

  createUser() {
    var user = new User(this)
    this.users.push(user)
    return user
  }

  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1)
  }

  resolveUser(userId){
    return this.users.find(user => user.id === userId)
  }
}
