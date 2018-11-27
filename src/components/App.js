import React, { Component } from 'react';
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
        <Route exact path='/groups' render={() => (
        <Redirect
          to='/groups/browse'
        />
      )} />
        <Route path='/groups/browse' component={GroupsContainer}/>
        <Route path='/artists' component={ArtistsContainer}/>
        <Route path='/albums' component={AlbumsContainer}/>
      </div>
    );
  }
}

export default App;
