import React from 'react';
import UserActions from './UserActions';

const UserRow = ({userId, userPhotoUrl, userName, handleUserRemove}) => (
  <tr>
      <td><img height="80" src={userPhotoUrl}/></td>
      <td><h3>{userName}</h3></td>
      <td>
        <UserActions userId={userId} handleUserRemove={handleUserRemove}/>
      </td>
  </tr>
)

UserRow.propTypes = {
  userId: React.PropTypes.number.isRequired,
  userPhotoUrl: React.PropTypes.string.isRequired,
  userName: React.PropTypes.string.isRequired,
  handleUserRemove: React.PropTypes.func.isRequired
}

export default UserRow
