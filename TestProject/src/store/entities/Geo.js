import { observable } from "mobx"

class Geo {
  lat = observable()
  lng = observable()

  constructor(lat, lng){
    this.lat = lat
    this.lng = lng
  }
}

export default Geo
