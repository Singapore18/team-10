import React, { Component } from 'react';

import FormScreen from './app/form/FormPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Import css
import './app/assets/css/theme.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
      }
  }

  render() {
    return (
      <Router>
        <Route>
          <Switch>
              <Route exact path='' component={FormScreen}/>
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default App;