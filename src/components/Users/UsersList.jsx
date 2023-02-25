import { Component } from 'react';

// import NotFound from '../NotFound';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  render() {

    return (
      <div className="mb-5">
        <UsersItem />
        <UsersItem />
        <UsersItem />
      </div>
    );
  }
}
