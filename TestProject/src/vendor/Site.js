import React from 'react';

class Site extends React.Component {
  render(){
    return(
      <div className="container">
        <h1>ToDo List</h1>
        {this.props.children}        
      </div>
    );
  }
}

export default Site
