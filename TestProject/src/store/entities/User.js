import { observable } from "mobx"

class User {  
  id = observable()
  name = observable()
  username = observable()
  email = observable()
  address = observable()
  phone = observable()
  website = observable()
  company = observable()
  photoUrl = observable()

  constructor(id, name, username, email, address, phone, website, company){
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.address = address
    this.phone = phone
    this.website = website
    this.company = company
    this.photoUrl = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
  }
}

export default User
