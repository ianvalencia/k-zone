import React, { Component } from 'react';
import HomepageLayout from './HomepageLayout'
import ResponsiveNavbar from './ResponsiveNavbar'
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import GroupsContainer from './GroupsContainer';
import ArtistsContainer from './ArtistsContainer';
import AlbumsContainer from './AlbumsContainer';
class App extends Component {
  render() {
    return (
      <div>
        <ResponsiveNavbar />
        <Route exact path='/' component={LandingPage}/>
        <Route path='/groups' component={GroupsContainer}/>
        <Route path='/artists' component={ArtistsContainer}/>
        <Route path='/albums' component={AlbumsContainer}/>
      </div>
    );
  }
}

export default App;
