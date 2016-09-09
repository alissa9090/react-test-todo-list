import React from 'react'
import {observer} from 'mobx-react'
import asForm from '../components/asForm'
import InputField from '../components/InputField'

@observer
class UserCompany extends React.Component {
  render () {
    const {company, updateProperty} = this.props
    return (
      <div>
        <InputField id="company-name" label="Name" name="name" value={company.name.get()} onChange={updateProperty}/>
        <InputField id="company-catchPhrase" label="Catch Phrase" name="catchPhrase" value={company.catchPhrase.get()} onChange={updateProperty}/>
        <InputField id="company-bs" label="Bs" name="bs" value={company.bs.get()} onChange={updateProperty}/>
      </div>
    )
  }
}

UserCompany.propTypes = {
  company: React.PropTypes.object.isRequired
}

export default asForm(UserCompany, 'company')
