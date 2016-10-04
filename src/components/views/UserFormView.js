import React from 'react'
import UserStore from '../../stores/UserStore'
import UserApi from '../../api/UserApi'
import RestClient from '../../api/RestClient'
import UserForm from '../user/form/UserForm'
import form from '../user/form/UserFormObject'
import SaveButton from '../utility/SaveButton'
import GoBackButton from '../utility/GoBackButton'

class UserFormView extends React.Component {
  userStore
  user
  constructor(){
    super();
    let restClient = new RestClient("https://jsonplaceholder.typicode.com")
    let userApi = new UserApi(restClient)

    this.userStore = new UserStore(userApi)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()
    return form.validate()
      .then(isValid => {
        return isValid
        ? this.onSuccess()
        : this.onError()
      })
  }
  onSuccess(){
    const values = form.values()
    this.user.updateFromFlatJson(values)
    return this.user.save().then(()=>{
      form.clear()
      return true
    })
  }
  onError(){
    console.log('All form errors', form.errors())
    return false
  }
  componentDidMount(){
    const userId = parseInt(this.props.params.userId)
    if(userId){
      this.userStore.loadUser(userId).then(()=>{
        this.user = this.userStore.users[0]
        form.update(this.user.asFlatJson)
      })
    } else {
      this.user = this.userStore.createUser()
    }
  }
  render(){
    const {mode} = this.props.params
    return(
      <div className="update-user">
        <div className="page-header">
          <h1>User form</h1>
        </div>
        <UserForm form={form} mode={mode}/>
        <SaveButton handleSave={this.onSubmit} visible={mode !== "view"}/>
        <GoBackButton title={mode === "view" ? "Go Back" : "Cancel"}/>
      </div>
    )
  }
}

export default UserFormView
