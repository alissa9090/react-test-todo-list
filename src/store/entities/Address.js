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
  updateFromJson(json){
    this.street.set(json.street)
    this.suite.set(json.suite)
    this.city.set(json.city)
    this.zipcode.set(json.zipcode)
    this.geo.updateFromJson(json.geo)
  }
  getFields(){
    const addressFields = {
      street: {
        label: 'Street',
        value: this.street.get(),
        default: this.street.get()
      },
      suite: {
        label: 'Suite',
        value: this.suite.get(),
        default: this.suite.get()
      },
      city: {
        label: 'City',
        value: this.city.get(),
        default: this.city.get()
      },
      zipcode: {
        label: 'Zipcode',
        value: this.zipcode.get(),
        default: this.zipcode.get()
      }
    }
    const geoFields = this.geo.getFields()
    return Object.assign(addressFields, geoFields);
  }
}

export default Address
