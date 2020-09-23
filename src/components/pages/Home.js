import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    // const button = this.props.authState.isAuthenticated ?
    //   <button onClick={this.logout}>Logout</button> :
    //   <button onClick={this.login}>Login</button>;

    const mainContent = this.props.authState.isAuthenticated ? (
        <div>
            <p className="lead"> You have entered the staff portal, <Link to="/staff">Click here</Link></p>
            <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
        </div>
    ) : (
        <div>
            <p className="lead"> if you are staff member please get your ceredentials from supervisor</p>
            <button className="btn btn-light btn-lg" onClick={this.login}>Login</button>
        </div>
    );

    return (
      <div className="jjumbotron">
        <h1 className="display-4">Acme Staff portal</h1>
        {mainContent}
      </div>
    );
  }
});

{/* <div>
        <Link to='/'>Home</Link><br/>
        <Link to='/protected'>Protected</Link><br/>
        {button}
      </div> */}