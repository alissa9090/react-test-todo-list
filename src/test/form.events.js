import form from './form';

const handleOnSubmit = (e) => {
  e.preventDefault();
  
  // check if the form is valid, otherwise exit
  if (!form.validate()) return;
  
  alert('Form is valid! Send the requrest here.');
  
  // get fields values
  console.log('Form Values', form.values());

  // or show a custom generic error after a beckend call
  form.invalidate('The user already exist.')
}

const handleOnClear = (e) => {
  e.preventDefault();

  // clear the form
  form.clear();
}

const handleOnReset = (e) => {
  e.preventDefault();

  // reset to the default initial values
  form.reset();
}

export default {
  handleOnReset,
  handleOnClear,
  handleOnSubmit
}