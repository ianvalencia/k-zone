import React, { Component } from 'react'
import { Button, Container, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Container text style={{ marginTop: '7em' }}>
          <Header
            as='h1'
            content='Welcome to K-Zone!'
            style={{
              fontSize: '4em',
              //fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
            textAlign='center'
          />
          <Header
            as='h2'
            content='Where ewan meets ebas ganyan'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
            textAlign='center'
          />
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Container>
      </div>
    )
  }  
  
}

export default LandingPage