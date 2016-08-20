import { observable } from "mobx"

class Company {  
  name = observable()
  catchPhrase = observable()
  bs = observable()

  constructor(name, catchPhrase, bs){
    this.name = name
    this.catchPhrase = catchPhrase
    this.bs = bs
  }
}

export default Company
