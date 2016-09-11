import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserCompany extends React.Component {
  render () {
    const {form, updateProperty} = this.props
    return (
      <div>
        <InputField id="company-name" label={form.$('companyName').label} name="name" value={form.$('companyName').value} onChange={updateProperty} error={form.$('companyName').error}/>
        <InputField id="company-catchPhrase" label={form.$('catchPhrase').label} name="catchPhrase" value={form.$('catchPhrase').value} onChange={updateProperty} error={form.$('catchPhrase').error}/>
        <InputField id="company-bs" label={form.$('bs').label} name="bs" value={form.$('bs').value} onChange={updateProperty} error={form.$('bs').error}/>
      </div>
    )
  }
}

UserCompany.propTypes = {
  company: React.PropTypes.object.isRequired,
  form: React.PropTypes.object.isRequired
}

export default asForm(UserCompany, 'company')
