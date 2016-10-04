import React from 'react';
import { Link } from 'react-router';

const NewUserButton = () => (
  <Link to="userForm/create" className="btn btn-primary new-user">New User</Link>
)

export default NewUserButton
