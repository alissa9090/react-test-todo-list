import React from 'react'
import {observer} from 'mobx-react'

@observer
export default function asForm (MyComponent, formDataProp) {
  return class Form extends React.Component {
    constructor () {
      super()
      this.updateProperty = this.updateProperty.bind(this)
    }

    updateProperty (key, value) {
      this.props[formDataProp][key].set(value)
    }

    render () {
      return (
        <MyComponent {...this.props}
            updateProperty={this.updateProperty} />
      )
    }
  }
}
