import React from 'react'
import {observer} from 'mobx-react'

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
    return (
      <div class="form-group">
        <label htmlFor={input.id} class="col-lg-2 control-label">{input.label || input.name}</label>
        <div class="col-lg-10">
        <input
            className="form-control"
            id={input.id}
            name={input.name}
            onChange={this.onChange}
            type={input.type}
            value={input.value}/>
          <i className="validation-error">{input.error}</i>
        </div>
      </div>
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
  type: 'text'
}

export default InputField
