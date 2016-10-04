import {observable, computed, transaction} from 'mobx';
import uuid from 'node-uuid';

export default class Todo {
  id = null;

  @observable completed = false;
  @observable title = "";
  @observable userId = 0;

  store = null;

  constructor(store, json) {
    this.store = store
    this.id = json ? json.id : uuid.v4()
    if(json){
      this.updateFromJson(json)
    }
  }

  save(){
    return this.store.transportLayer.saveTodo(this.asJson)
  }

  delete() {
    return this.store.transportLayer.deleteTodo(this.id).then(
      ()=>this.store.removeTodo(this))
  }

  @computed get asJson() {
    return {
      id: this.id,
      completed: this.completed,
      title: this.title,
      userId: this.userId
    };
  }

  updateFromJson(json) {
    transaction(() => {
        Object.assign(this, json)
    })
  }
}
