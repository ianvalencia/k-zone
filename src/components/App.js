import React, { Component } from 'react';
import HomepageLayout from './HomepageLayout'
import ResponsiveNavbar from './ResponsiveNavbar'
import { Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='ui grid'>
        <ResponsiveNavbar />
        <div className='row'>
          <Route path='/home' />
        </div>
      </div>
    );
  }
}

export default App;
