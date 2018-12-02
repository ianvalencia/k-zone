import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ResponsiveNavbar from './ResponsiveNavbar'
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import BrowseGroup from './BrowseGroups';
import Group from './Group'
import ArtistsContainer from './ArtistsContainer';
import AlbumsContainer from './AlbumsContainer';
class App extends Component {
  state = {
    groups: [],
    groupTypeOptions: [
      { key: 1, text: 'Boy Group', value:'Boy Group' },
      { key: 2, text: 'Girl Group', value:'Girl Group' },
      { key: 3, text: 'Coed', value: 'Coed' }
    ]
  }
  
  fetchData() {
    let url = 'http://localhost:3001/groups'
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({groups: data}))
  }

  componentDidMount() {
    this.fetchData()
  }

  createGroup = (grp) => {
    this.setState({
      timers: this.state.groups.concat(grp),
    });
  } 

  updateGroup = (attrs) => {
    this.setState({
      groups: this.state.groups.map((group) => {
        if (group.id === attrs.id) {
          return Object.assign({}, attrs);
        } else {
          return group;
        }
      }),
    });

    let url = 'http://localhost:3001/groups/'+attrs.id
    fetch(url, {
      method: 'put',
      body: JSON.stringify(attrs),
      headers: {
        'Content-Type': 'application/json',
      },
    })

  }

  deleteGroup = (groupId) => {
    this.setState({
      groups: this.state.groups.filter(group => group.id !== groupId),
    });

    let url = 'http://localhost:3001/groups/'+groupId
    fetch(url, {
      method: 'delete',
      //body: JSON.stringify(groupId),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  };
  
  render() {
    return (
      <div>
        <ResponsiveNavbar />
        <Container style={{ marginTop: '2em'}}>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/browse/groups' render={() => <BrowseGroup data={this.state} triggerFetchData={this.fetchData}/>} />
          <Route path='/artists' component={ArtistsContainer}/>
          <Route path='/albums' component={AlbumsContainer}/>
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
              );
            }}
          />
        </Container>
      </div>
    );
  }
}

export default App;