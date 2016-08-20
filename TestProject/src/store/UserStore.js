import { observable, computed } from "mobx"
import User from "./entities/User"
import Address from "./entities/Address"
import Geo from "./entities/Geo"
import Company from "./entities/Company"

class UserStore {
  isLoading = observable(true);
  users = observable([])
  constructor() {
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading = true;
    const source = "https://jsonplaceholder.typicode.com/users"
    $.get(source, function (result) {
      result.forEach(json => this.updateUsersFromServer(json));
      this.isLoading = false;
    }.bind(this));
  }
  updateUsersFromServer(json) {
    let user = this.users.find(user => user.id === json.id);
    if (!user) {
      user = new User(
        json.id,
        json.name,
        json.username,
        json.email,
        new Address(
          json.address.street,
          json.address.suite,
          json.address.city,
          json.address.zipcode,
          new Geo(
            json.address.geo.lat,
            json.address.geo.lng)),
        json.phone,
        json.website,
        new Company(
          json.company.name,
          json.company.catchPhrase,
          json.company.bs));
      this.users.push(user);
    }
  }
  createUser(id, name, username, email, address, phone, website, company) {
    var user = new User(id, name, username, email, address, phone, website, company);
    this.users.push(user);
    return user;
  }
  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1);
  }
  getUserById(id) {
    const users = this.users.filter(user => user.id === id)
    return users.length > 0 ? users[0] : null
  }
}

var userStore = window.userStore = new UserStore

export default userStore
