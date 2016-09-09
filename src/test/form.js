import Form from 'mobx-ajv-form';

// define a json schema
const schema = {
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 6, maxLength: 20 },
    email: { type: 'string', format: 'email', minLength: 5, maxLength: 20 },
    password: { type: 'string', minLength: 6, maxLength: 20 }
  }
};

// define fields
const fields = {

};

// create the form
export default new Form({ fields, schema });
