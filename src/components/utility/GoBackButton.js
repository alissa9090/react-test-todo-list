import React from 'react';
import {withRouter} from 'react-router';

const GoBackButton = ({title, router}) => (
  <button className="btn btn-default" onClick={router.goBack}>{title}</button>
)

GoBackButton.propTypes = {
  title: React.PropTypes.string
}

GoBackButton.defaultProps = {
  title: 'Go Back'
}

export default withRouter(GoBackButton)
