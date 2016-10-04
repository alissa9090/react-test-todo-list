import React from 'react';
import UserRow from './UserRow';
import { observer } from 'mobx-react';

const UserTable = observer(({users}) => (
  <table className="table table-hover">
    <tbody>
    {users.map(user => <UserRow
      key={user.id}
      userId={user.id}
      userPhotoUrl={user.photoUrl}
      userName={user.name}
      handleUserRemove={user.delete.bind(user)}/>
    )}
    </tbody>
  </table>
))

UserTable.propTypes = {
  users: React.PropTypes.object.isRequired
}

export default UserTable
