import {observable, computed, transaction} from 'mobx';
import uuid from 'node-uuid';
import MobxReactForm from 'mobx-react-form';
import ajv from 'ajv';
import validatorjs from 'validatorjs';

export default class User {
  id = null;
  @observable name = ""
  @observable username = ""
  @observable email = ""
  @observable street = ""
  @observable suite = ""
  @observable city = ""
  @observable zipcode = ""
  @observable phone = ""
  @observable website = ""
  @observable companyName = ""
  @observable photoUrl = ""

  store = null;

  constructor(store, json) {
    this.store = store
    this.id = json ? json.id : uuid.v4()
    if(json){
      this.updateFromJson(json)
    }
  }

  save(){
    return this.store.transportLayer.saveUser(this.asJson)
  }

  delete() {
    return this.store.transportLayer.deleteUser(this.id).then(
      ()=>this.store.removeUser(this))
  }

  @computed get asJson() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      address: {
        street: this.street,
        suite: this.suite,
        city: this.city,
        zipcode: this.zipcode
      },
      phone: this.phone,
      website: this.website,
      company: {
        name: this.companyName
      },
      photoUrl: this.photoUrl
    };
  }

  @computed get asFlatJson() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      street: this.street,
      suite: this.suite,
      city: this.city,
      zipcode: this.zipcode,
      phone: this.phone,
      website: this.website,
      companyName: this.companyName,
      photoUrl: this.photoUrl
    };
  }

  updateFromJson(json) {
    transaction(() => {
      this.id = json.id,
      this.name = json.name,
      this.username = json.username,
      this.email = json.email,
      this.street = json.address.street,
      this.suite = json.address.suite,
      this.city = json.address.city,
      this.zipcode = json.address.zipcode,
      this.phone = json.phone,
      this.website = json.website,
      this.companyName = json.company.name,
      this.photoUrl = json.photoUrl || "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png"
    })
  }

  updateFromFlatJson(json) {
    transaction(() => {
        Object.assign(this, json)
    })
  }
}
