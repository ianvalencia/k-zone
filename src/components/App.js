import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

import ResponsiveNavbar from './ResponsiveNavbar'
import LandingPage from './LandingPage'
import CreateGroup from './CreateGroup'
import BrowseGroup from './BrowseGroups'
import Group from './Group'
import ArtistsContainer from './ArtistsContainer'
import AlbumsContainer from './AlbumsContainer'

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
    let url = 'http://localhost:3001/groups/'
    this.POST(url, grp)
  } 

  updateGroup = (grp) => {
    let url = 'http://localhost:3001/groups/'+grp.id
    this.PUT(url, grp)
  }

  deleteGroup = (groupId) => {
    let url = 'http://localhost:3001/groups/'+groupId
    this.DELETE(url)
  }
  
  render() {
    return (
      <div>
        <ResponsiveNavbar />
        <Container style={{ marginTop: '2em'}}>
          <Route exact path='/' component={LandingPage} />
          <Route path='/browse/groups' component={BrowseGroup} />
          <Route path='/artists' component={ArtistsContainer} />
          <Route path='/albums' component={AlbumsContainer} />
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
        </Container>
      </div>
    )
  }
}

export default App