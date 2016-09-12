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
  updateFromJson(json){
    this.id.set(json.id)
    this.name.set(json.name)
    this.username.set(json.username)
    this.email.set(json.email)
    this.address.updateFromJson(json.address)
    this.phone.set(json.phone)
    this.website.set(json.website)
    this.company.updateFromJson(json.company)
    this.photoUrl.set("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png")
  }
  getFields(){
     const userInfoFields = {
      id: {
        label: 'Id',
        value: this.id.get(),
        default: this.id.get()
      },
      name: {
        label: 'Name',
        value: this.name.get(),
        default: this.name.get(),
        rules: 'required'
      },
      username: {
        label: 'Username',
        value: this.username.get(),
        default: this.username.get(),
        rules: 'required'
      },
      email: {
        label: 'Email',
        value: this.email.get(),
        default: this.email.get(),
        rules: 'required'
      },
      phone: {
        label: 'Phone',
        value: this.phone.get(),
        default: this.phone.get()
      },
      website: {
        label: 'Website',
        value: this.website.get(),
        default: this.website.get()
      },
      photoUrl: {
        label: 'Photo Url',
        value: this.photoUrl.get(),
        default: this.photoUrl.get()
      }
    }
    const address = this.address.getFields()
    const companyFields = this.company.getFields()
    return Object.assign(userInfoFields, address, companyFields)
  }
}

export default User
