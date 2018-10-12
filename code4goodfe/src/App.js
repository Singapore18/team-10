import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Screens
import FormPage from './app/form/FormPage';
import CoachPage from './app/coach/CoachPage';
import CoachHomePage from './app/coach/CoachHomePage';
import ResumeContainer from './app/resume/ResumeContainer';
import ResumeHome from './app/resume/ResumeHome';
// import HirePage from './app/hire/HirePage';

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
              <Route exact path='/' component={FormPage}/>
              <Route exact path='/resume/:identifier' component={ResumeContainer}/>
              <Route exact path='/home' component={ResumeHome} />
              <Route exact path='/coachHome' component={CoachHomePage}/>
              <Route exact path='/coach/:identifier' component={CoachPage}/>
              {/* <Route exact path='/hire/:identifier' component={HirePage} /> */}
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default App;
