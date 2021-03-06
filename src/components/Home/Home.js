import React, { Component } from 'react';

import { userService, authenticationService } from '../../_services/index';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { currentUser, users } = this.state;
    return (
      <div>
        <h1>Hi {currentUser.firstName}!</h1>
        <p>You're logged in !!</p>
        {users &&
          <ul>
            {users.map(user =>
              <li key={user.id}>{user.firstName} {user.lastName}</li>
            )}
          </ul>
        }
      </div>
    );
  }
}

export default Home;