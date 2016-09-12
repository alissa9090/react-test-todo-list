import { observable } from "mobx"
import User from "./entities/User"
import Address from "./entities/Address"
import Geo from "./entities/Geo"
import Company from "./entities/Company"
import fetch from "isomorphic-fetch"

class UserStore {
  isLoading = observable(true);
  users = observable([]);
  nextId = 0

  constructor() {
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading.set(true);
    const source = "https://jsonplaceholder.typicode.com/users"
    fetch(source)
      .then(function(response) {
        return response.json()
      })
      .then(function(result) {
        result.forEach(json => this.createUserFromJson(json));
        if(this.users.length === 0){
          this.nextId = 1
        } else {
          this.nextId = this.users[this.users.length - 1].id.get() + 1
        }
        this.isLoading.set(false);
      }.bind(this))
  }
  loadUser(id) {
    this.isLoading.set(true);
    const source = `https://jsonplaceholder.typicode.com/users?id=${id}`
    fetch(source)
      .then(function(response) {
        return response.json()
      })
      .then(function(result) {
        result.forEach(json => this.updateUserFromJson(json));
        this.isLoading.set(false);
      }.bind(this))
  }
  createUserFromJson(json) {
    let user = this.getById(json.id);
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
  updateUserFromJson(json) {
    let user = this.getById(json.id);
    if (user) {
      user.updateFromJson(json)
    }
  }
  getNewUser(){
    let user = new User(
      0,
      "",
      "",
      "",
      new Address(
        "",
        "",
        "",
        "",
        new Geo(
          "",
          "")),
      "",
      "",
      new Company(
        "",
        "",
        ""));
    return user
  }
  createUser(name, username, email, address, phone, website, company) {
    const id = this.getNextId()
    var user = new User(id, name, username, email, address, phone, website, company)
    return this.addUser(user)
  }
  addUser(user) {
    if(user.id.get() <= 0){
      user.id.set(this.getNextId())
    }
    this.users.push(user)
    return user
  }
  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1)
  }
  getNextId(){
    return this.nextId++
  }
  getById(id) {
    return this.users.find(user => user.id.get() === id)
  }
}

var userStore = window.userStore = new UserStore

export default userStore
