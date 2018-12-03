import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Grid, 
  Menu, 
  Segment, 
  Divider, 
  Button, 
  Header, 
} from 'semantic-ui-react'

import GroupCard from './GroupCard'

class BrowseGroups extends React.Component {
  state = {
    groups: [],
  }

  fetchData() {
    let url = 'http://localhost:5000/groups'
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({groups: data}))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillUpdate() {
    this.fetchData()
  }

  checkIfEmpty = () => {
    if (this.state.groups.length === 0) {
      return (
        <Header as='h4' content='No groups found.' />
      )
    } else {
      return (
        <Grid columns={3}>
        { 
          this.state.groups.map((grp) => (
            <Grid.Column>
              <GroupCard group={grp} />
            </Grid.Column>
          ))
        }
        </Grid>
      )
    } 
  }

  render() {
    return (
      <Grid columns={2} >
        <Grid.Column width={3}>
          <Menu vertical fluid borderless>
            <Menu.Item header content='Cannot find group?' />
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Button  
                fluid 
                icon='add circle'
                content='Add New Group'
                positive
                as={Link}
                to='/create/group'
              />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Segment fluid style={{ minHeight: '400px' }}>
          {
            this.checkIfEmpty()
          }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default BrowseGroups