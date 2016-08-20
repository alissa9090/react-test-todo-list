import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    this.state = {
      detailsExpanded: false
    }
    this.toogleDetails = this.toogleDetails.bind(this);
  }
  toogleDetails(e){
    e.preventDefault();
    this.setState({
      detailsExpanded: !this.state.detailsExpanded
    });
  }
  render(){
    const user = this.props.user
    return (
      <div className="user-container jumbotron">
        <div className="user">
          <h3>{user.name}</h3>
          <img src={user.photoUrl}/>
          <h4>{user.company.name}</h4>
          {this.props.showDetails ? this.renderDetails() : ""}
        </div>
      </div>
    )
  }
  renderDetails(){
    const user = this.props.user
    return(
      <div className="user-details">
        <a className={this.state.detailsExpanded ? "hidden" : "btn btn-link"}
          href="#"
          onClick={this.toogleDetails}>
          show details
        </a>
        <div className={this.state.detailsExpanded ? "" : "hidden"}>
          <div className="form-horizontal">
            <div className="form-group">
              <label className="col-lg-2 control-label">Name:</label>
              <div className="col-lg-10">{user.name}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Email:</label>
              <div className="col-lg-10">{user.email}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Address:</label>
              <div className="col-lg-10">
                {user.address.street} {user.address.suite}, {user.address.zipcode} {user.address.city}
              </div>
          </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Phone:</label>
              <div className="col-lg-10">{user.phone}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Website:</label>
              <div className="col-lg-10">{user.website}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Company:</label>
              <div className="col-lg-10">{user.company.name}</div>
            </div>
          </div>
          <a href="#"
            className="btn btn-link"
            onClick={this.toogleDetails}>
            hide details
          </a>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  showDetails: React.PropTypes.bool
}

User.defaultProps = {
  showDetails: false
}

export default User
