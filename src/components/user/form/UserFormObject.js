import ajv from 'ajv'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'

const plugins = {
  svk: ajv,
  dvr: validatorjs
};
const fields = {
   name: {
     label: 'Name',
     rules: 'required|string'
   },
   username: {
     label: 'Username',
     rules: 'required|string'
   },
   email: {
     label: 'Email',
     rules: 'required|string'
   },
   street: {
     label: 'Street'
   },
   suite: {
     label: 'Suite'
   },
   city: {
     label: 'City'
   },
   zipcode: {
     label: 'Zipcode'
   },
   phone: {
     label: 'Phone'
   },
   website: {
     label: 'Website'
   },
   companyName: {
     label: 'Name'
   },
   photoUrl: {
     label: 'Photo Url'
   }
 }
const schema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email', minLength: 5, maxLength: 20 }
  }
}

export default new MobxReactForm({
    plugins,
    fields,
    schema
  })
