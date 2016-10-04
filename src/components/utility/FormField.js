import React from 'react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import {observer} from 'mobx-react'

@observer
class FormField extends React.Component {
  render () {
    const {mode, form, fieldName} = this.props
    let formControl = ""
    if(mode === 'view'){
      formControl = <FormControl.Static>
                      {form.$(fieldName).value}
                    </FormControl.Static>
    } else {
      formControl = <FormControl
        type={this.props.type}
        name={form.$(fieldName).name}
        onChange={form.$(fieldName).sync}
        placeholder={form.$(fieldName).label}
        value={form.$(fieldName).value} />
    }
    return (
      <FormGroup controlId={form.$(fieldName).name}>
        <Col componentClass={ControlLabel} sm={2}>
          {form.$(fieldName).label}:
        </Col>
        <Col sm={10}>
          {formControl}
          <i className="validation-error">{form.$(fieldName).error}</i>
        </Col>
      </FormGroup>
    )
  }
}

FormField.propTypes = {
  form: React.PropTypes.object.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

FormField.defaultProps = {
  type: 'text'
}

export default FormField
