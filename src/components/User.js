import React from 'react';
import {Link} from 'react-router';

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
      <div>
        <div className="user-container">
          <div className="jumbotron" onClick={this.props.onClick}>
            <div className="user">
              <h3>{user.name.get()}</h3>
              <img height="128" width="128" src={user.photoUrl.get()}/>
              <h4>{user.company.name.get()}</h4>
              {this.props.showDetails ? this.renderDetails() : ""}
            </div>
          </div>          
        </div>
        <div className="clearFloats"></div>
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
              <div className="col-lg-10">{user.name.get()}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Email:</label>
              <div className="col-lg-10">{user.email.get()}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Address:</label>
              <div className="col-lg-10">
                {user.address.street.get()} {user.address.suite.get()}, {user.address.zipcode.get()} {user.address.city.get()}
              </div>
          </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Phone:</label>
              <div className="col-lg-10">{user.phone.get()}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Website:</label>
              <div className="col-lg-10">{user.website.get()}</div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Company:</label>
              <div className="col-lg-10">{user.company.name.get()}</div>
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
  onDelete: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func,
  showDetails: React.PropTypes.bool
}

User.defaultProps = {
  showDetails: false,
  onClick: ()=>{}
}

export default User
