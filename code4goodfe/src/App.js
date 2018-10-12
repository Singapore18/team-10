import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Import Screens
import FormPage from './app/form/FormPage';
import CoachPage from './app/coach/CoachPage';
import ResumePage from './app/resume/ResumePage';

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
              <Route exact path='/form' component={FormPage}/>
              <Route exact path='/resume/:identifier' component={ResumePage}/>
              <Route exact path='/coach/:identifier' component={CoachPage}/>
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default App;