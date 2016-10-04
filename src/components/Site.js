import React from 'react';
import DevTools from 'mobx-react-devtools';

class Site extends React.Component {
  render(){
    return(
      <div className="container">
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

export default Site
