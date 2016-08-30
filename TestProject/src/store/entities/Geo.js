import { observable } from "mobx"

class Geo {
  lat = observable("")
  lng = observable("")

  constructor(lat, lng){
    this.lat.set(lat)
    this.lng.set(lng)
  }
}

export default Geo
