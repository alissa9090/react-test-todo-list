import { observable } from "mobx"

class Geo {
  lat = observable("")
  lng = observable("")

  constructor(lat, lng){
    this.lat.set(lat)
    this.lng.set(lng)
  }
  updateFromJson(json){
    this.lat.set(json.lat)
    this.lng.set(json.lng)
  }
  getFields(){
    return {
      lat: {
        label: 'Lat',
        value: this.lat.get(),
        default: this.lat.get()
      },
      lng: {
        label: 'Lng',
        value: this.lng.get(),
        default: this.lng.get()
      }
    }
  }
}

export default Geo
