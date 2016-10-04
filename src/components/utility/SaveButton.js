import React from 'react';
import {withRouter} from 'react-router';

class SaveButton extends React.Component {
  constructor(){
    super()
    this.handleSave = this.handleSave.bind(this)
  }
  handleSave(e){
    e.preventDefault()
    if(this.props.goBackOnSuccess){
      this.props.handleSave(e).then((isValid)=>{
        if(isValid){
          this.props.router.goBack()
        }
      })
    } else {
      this.props.handleSave(e)
    }
  }
  render(){
    return (
      <button className={`btn btn-primary ${this.props.visible? "" : "hidden"}`} onClick={this.handleSave}>{this.props.title}</button>
    )
  }
}

SaveButton.propTypes = {
  title: React.PropTypes.string,
  visible: React.PropTypes.bool,
  goBackOnSuccess: React.PropTypes.bool,
  handleSave: React.PropTypes.func.isRequired
}

SaveButton.defaultProps = {
  title: 'Save',
  visible: true,
  goBackOnSuccess: true
}

export default withRouter(SaveButton)
