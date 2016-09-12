import { observable } from "mobx"

class Company {
  name = observable("")
  catchPhrase = observable("")
  bs = observable("")

  constructor(name, catchPhrase, bs){
    this.name.set(name)
    this.catchPhrase.set(catchPhrase)
    this.bs.set(bs)
  }
  updateFromJson(json){
    this.name.set(json.name)
    this.catchPhrase.set(json.catchPhrase)
    this.bs.set(json.bs)
  }
  getFields(){
    return {
      companyName: {
        label: 'Name',
        value: this.name.get(),
        default: this.name.get()
      },
      catchPhrase: {
        label: 'Catch Phrase',
        value: this.catchPhrase.get(),
        default: this.catchPhrase.get()
      },
      bs: {
        label: 'BS',
        value: this.bs.get(),
        default: this.bs.get()
      }
    }
  }
}

export default Company
