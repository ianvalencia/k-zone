import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import ResponsiveNavbar from './ResponsiveNavbar'
import LandingPage from './LandingPage'
import BrowseGroups from './BrowseGroups'
import Group from './Group'
import CreateGroup from './CreateGroup'
import BrowseArtists from './BrowseArtists'
import Artist from './Artist';
import CreateArtist from './CreateArtist'
import BrowseAlbums from './BrowseAlbums'

class App extends Component {
  POST = (url, data) => {
    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } 

  PUT = (url, data) => {
    fetch(url, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  DELETE = (url) => {
    fetch(url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  createGroup = (grp) => {
    let url = 'http://localhost:5000/groups/'
    this.POST(url, grp)
  } 

  updateGroup = (grp) => {
    let url = 'http://localhost:5000/groups/'+grp.id
    this.PUT(url, grp)
  }

  deleteGroup = (groupId) => {
    let url = 'http://localhost:5000/groups/'+groupId
    this.DELETE(url)
  }

  createArtist = (artist) => {
    let url = 'http://localhost:5000/artists/'
    this.POST(url, artist)
  } 

  updateArtist = (artist) => {
    let url = 'http://localhost:5000/artists/'+artist.id
    this.PUT(url, artist)
  }

  deleteArtist = (artistId) => {
    let url = 'http://localhost:5000/artists/'+artistId
    this.DELETE(url)
  }
  
  render() {
    return (
      <div>
        <ResponsiveNavbar />
        <Container style={{ marginTop: '2em', marginBottom: '2em'}}>
          <Route exact path='/' component={LandingPage} />
          <Route path='/browse/groups' component={BrowseGroups} />
          <Route exact path='/browse/artists' component={BrowseArtists} />
          <Route path='/browse/albums' component={BrowseAlbums} />
          <Route
            path='/groups/:id'
            render={({ match }) => {
              console.log(match.params.id)
              return (
                <Group 
                  grpId={match.params.id}
                  onFormSubmit={this.updateGroup}
                  onDeleteClick={this.deleteGroup} 
                />
              )
            }}
          />
          <Route path='/create/group' render={() => <CreateGroup onFormSubmit={this.createGroup} />} />
          <Route
            path='/artists/:id'
            render={({ match }) => {
              console.log(match.params.id)
              return (
                <Artist
                  artistId={match.params.id}
                  onFormSubmit={this.updateArtist}
                  onDeleteClick={this.deleteArtist} 
                />
              )
            }}
          />
          <Route path='/create/artist' render={() => <CreateArtist onFormSubmit={this.createArtist} />} />
        </Container>
      </div>
    )
  }
}

export default App