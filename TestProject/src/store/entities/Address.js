import { observable } from "mobx"

class Address {
  street = observable("")
  suite = observable("")
  city = observable("")
  zipcode = observable("")
  geo

  constructor(street, suite, city, zipcode, geo){
    this.street.set(street)
    this.suite.set(suite)
    this.city.set(city)
    this.zipcode.set(zipcode)
    this.geo = geo
  }
}

export default Address
