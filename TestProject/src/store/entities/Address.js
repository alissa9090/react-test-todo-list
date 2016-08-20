import { observable } from "mobx"

class Address {
  street = observable()
  suite = observable()
  city = observable()
  zipcode = observable()
  geo = observable()

  constructor(street, suite, city, zipcode, geo){
    this.street = street
    this.suite = suite
    this.city = city
    this.zipcode = zipcode
    this.geo = geo
  }
}

export default Address
