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

import ArtistCard from './ArtistCard'

class BrowseArtists extends React.Component {
  state = {
    artists: [],
  }

  fetchData() {
    let url = 'http://localhost:5000/artists'
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({artists: data}))
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillUpdate() {
    this.fetchData()
  }

  checkIfEmpty = () => {
    if (this.state.artists.length === 0) {
      return (
        <Header as='h4' content='No artists found.' />
      )
    } else {
      return (
        <Grid columns={3}>
        { 
          this.state.artists.map((artist) => (
            <Grid.Column>
              <ArtistCard artist={artist} />
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
            <Menu.Item header content='Cannot find artist?' />
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Button  
                fluid 
                icon='add circle'
                content='Add New Artist'
                positive
                as={Link}
                to='/create/artist'
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

export default BrowseArtists