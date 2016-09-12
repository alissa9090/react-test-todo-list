import React from 'react'
import {observer} from 'mobx-react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

@observer
class InputField extends React.Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.props.onChange(event.target.name, event.target.value)
  }

  render () {
    const input = this.props
    const {mode} = this.props
    let formControl = ""
    if(mode === 'view'){
      formControl = <FormControl.Static>
                      {input.value}
                    </FormControl.Static>
    } else {
      formControl = <FormControl
        type={input.type}
        name={input.name}
        onChange={this.onChange}
        placeholder={input.name}
        value={input.value} />
    }
    return (
      <FormGroup controlId={input.id}>
        <Col componentClass={ControlLabel} sm={2}>
          {input.label}:
        </Col>
        <Col sm={10}>
          {formControl}
          <i className="validation-error">{input.error}</i>
        </Col>
      </FormGroup>
    )
  }
}

InputField.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

InputField.defaultProps = {
  type: 'text',
  mode: React.PropTypes.oneOf(['create', 'edit', 'view']).isRequired
}

export default InputField
