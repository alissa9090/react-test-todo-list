import React from 'react';

class Site extends React.Component {
  render(){
    return(
      <div className="container">        
        {this.props.children}
      </div>
    );
  }
}

export default Site
