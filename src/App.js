import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from './_helpers/history';
import { authenticationService } from './_services/authentication.service';
import { PrivateRoute } from './components/PrivateRoute';

import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import Routes from './_routes/Routes';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser &&
            <div className="container-fluid">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse">
                    <div className="nav navbar-nav">

                      <li><Link to="/" className="nav-item nav-link">Home</Link></li>
                      <li><Link to="/header" className="nav-item nav-link">header</Link></li>
                      <li><Link to="/footer" className="nav-item nav-link">header</Link></li>
                      <li><a onClick={this.logout} className="nav-item nav-link">Logout</a></li>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <Routes />
                  </div>
                </div>
              </div>
            </div>
          }
          {!currentUser &&
            <div className="jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                    <Route path="/login" component={Login} />
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </Router>
    );
  }
}

export default App;
