import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Dropdown, List, Divider, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ArtistsContainer extends Component {
  render() {
    return(
      <div>
        <Container style={{ marginTop: '7em' }}>
          This is the artists page.
        </Container>
      </div>
    )
  }  
  
}

export default ArtistsContainer