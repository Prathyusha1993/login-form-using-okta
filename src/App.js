import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';


function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Security issuer='https://dev-681928.okta.com/oauth2/default'
                  clientId='0oa116re3nck6dyb14x7'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired}>
      <div className="App">
        <Navbar />
        <div className="container">
        <Route path="/" exact={true} component={Home} />
        <SecureRoute path="/staff" exact={true} component={Staff} />
        <Route path='/login' render={() => <Login baseUrl='https://dev-681928.okta.com' />} />
        <Route path='/implicit/callback' component={ImplicitCallback} />
        </div>
      </div>
      </Security>
      </Router>
     );
  }
}
 
export default App;