import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

export default withRouter(
  class AppWithRouterAccess extends Component {
    constructor(props) {
      super(props);
      this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
      this.props.history.push("/login");
    }

    render() {
      return (
        <Security
          issuer="https://dev-681928.okta.com/oauth2/default"
          clientId="0oa116re3nck6dyb14x7"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={this.onAuthRequired}
        >
          <Route path="/" exact={true} component={Home} />
          <SecureRoute path="/staff" exact={true} component={Staff} />
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-681928.okta.com" />}
          />
          <Route path="/implicit/callback" component={LoginCallback} />
        </Security>
      );
    }
  }
);
