import React from 'react';
import { observer } from 'mobx-react';
import Input from './Input';
import userStore from '../store/UserStore';

@observer
class FormComponent extends React.Component {
  componentWillMount(){
    //this.user = userStore.getNewUser()
  }
  render(){
    if(userStore.isLoading.get()){
      console.log("loading")
      return null
    }
    this.user = userStore.getById(1)

    this.props.form.update(this.user)
    // this.props.form.update({
    //   username:  'SteveJobs',
    //   email: 's.jobs@apple.com',
    //   password: 'thinkdifferent'
    // })
    const { form, events } = this.props
    return(
      <form>
        <b>{form.fields.username.label}</b>
        <i style={{ color: 'red' }}>{form.fields.username.errorMessage}</i>
        <br />
        <Input
          type="text"
          name={form.fields.username.name}
          value={form.fields.username.value}
          placeholder={form.fields.username.label}
          onChange={form.syncValue}
          />
        <br />
        <br />
        <b>{form.fields.email.label}</b>
        <i style={{ color: 'red' }}>{form.fields.email.errorMessage}</i>
        <br />
        <input
          type="text"
          name={form.fields.email.name}
          value={form.fields.email.value}
          placeholder={form.fields.email.label}
          onChange={form.syncValue}
          />
        <br />
        <br />
        <b>{form.fields.password.label}</b>
        <i style={{ color: 'red' }}>{form.fields.password.errorMessage}</i>
        <br />
        <input
          type="password"
          name={form.fields.password.name}
          value={form.fields.password.value}
          placeholder={form.fields.password.label}
          onChange={form.syncValue}
          />
        <br />
        <br />
        <button
          type="submit"
          disabled={!form.isValid}
          onClick={events.handleOnSubmit}
          >Submit</button>
         <button
          type="submit"
          onClick={events.handleOnClear}
          >Clear</button>
        <button
          type="submit"
          onClick={events.handleOnReset}
          >Reset</button>
        <p>{form.genericErrorMessage}</p>
        <hr />
      </form>
    )
  }
}


export default FormComponent;
