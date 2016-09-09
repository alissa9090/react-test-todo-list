import { observable } from "mobx"

class User {
  id = observable(0)
  name = observable("")
  username = observable("")
  email = observable("")
  address
  phone = observable("")
  website = observable("")
  company
  photoUrl = observable("")

  constructor(id, name, username, email, address, phone, website, company){
    this.id.set(id)
    this.name.set(name)
    this.username.set(username)
    this.email.set(email)
    this.address = address
    this.phone.set(phone)
    this.website.set(website)
    this.company = company
    this.photoUrl.set("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png")
  }
}

export default User
