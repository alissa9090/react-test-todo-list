import React from 'react'
import { Form } from 'react-bootstrap'
import FormField from '../../utility/FormField'

class UserForm extends React.Component {
  titles = {
    create: "Create User",
    edit: "User Details",
    view: "User Details"
  }
  render(){
    const {form, mode} = this.props
    return (
      <Form horizontal className="user-form main">
        <fieldset>
          <legend>{this.titles[mode]}</legend>
          <FormField form={form} fieldName="name" mode={mode}/>
          <FormField form={form} fieldName="username" mode={mode}/>
          <FormField form={form} fieldName="email" mode={mode}/>
          <FormField form={form} fieldName="phone" mode={mode}/>
          <FormField form={form} fieldName="website" mode={mode}/>
          <FormField form={form} fieldName="photoUrl" mode={mode}/>
          <fieldset>
            <legend>Address</legend>
            <FormField form={form} fieldName="street" mode={mode}/>
            <FormField form={form} fieldName="suite" mode={mode}/>
            <FormField form={form} fieldName="city" mode={mode}/>
            <FormField form={form} fieldName="zipcode" mode={mode}/>
          </fieldset>
          <fieldset>
            <legend>Company</legend>
            <FormField form={form} fieldName="companyName" mode={mode}/>
          </fieldset>
        </fieldset>
      </Form>
    )
  }
}

UserForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

export default UserForm
