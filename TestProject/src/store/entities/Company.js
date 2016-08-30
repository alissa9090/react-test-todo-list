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
}

export default Company
