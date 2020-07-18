import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar.js'
import Breweries from './containers/Breweries.js'
import Circuits from './containers/Circuits.js'
import CreateAccountForm from './components/CreateAccountForm.js'
import LogInForm from './components/LogInForm'
import TestFetch from './containers/TestFetch.js'
import LogOutForm from './components/LogOutForm.js'


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Route path="/breweries" component={Breweries} />
      <Route path="/circuits" component={Circuits} />
      <Route exact path="/test-fetch" component={TestFetch} />
      <Route path="/create-account" component={CreateAccountForm} />
      <Route path="/log-in" component={LogInForm} />
      {/* <Route exact path="/log-in" component={Login} /> */}
      {/* <Route exact path="/create-account" component={CreateAccount} /> */}
      <Route exact path="/log-out" component={LogOutForm} />
    </Router>
  );
}

export default App;
