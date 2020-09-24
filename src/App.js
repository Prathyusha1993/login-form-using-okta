import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired(){
    this.props.history.push('/login');
  }
  
  render() { 
    return ( 
      <Router>
        <Navbar />
        <AppWithRouterAccess />
      </Router>
     );
  }
}
 
export default App;


{/* <Security issuer='https://dev-681928.okta.com/oauth2/default'
                  clientId='0oa116re3nck6dyb14x7'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired}>
      <div className="App">
        <Navbar />
        <div className="container">
        <Route path="/" exact={true} component={Home} />
        <SecureRoute path="/staff" exact={true} component={Staff} />
        <Route path='/login' render={() => <Login baseUrl='https://dev-681928.okta.com' />} />
        <Route path='/implicit/callback' component={LoginCallback} />
        </div>
      </div>
      </Security> */}