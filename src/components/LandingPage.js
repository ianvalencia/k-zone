import React, { Component } from 'react'
import { Button, Container, Icon, Header, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'

const LandingpageHeading = ({ mobile }) => (
  <Container text style={{ marginTop: mobile ? '15em' :'20em' }} textAlign='center'>
    <Header
      as='h1'
      content='Welcome to K-Zone!'
      style={{
        fontSize: mobile ? '2.5em' : '4em',
        //fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Where ewan meets ebas ganyan'
      style={{
        fontSize: mobile ? '1em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <LandingpageHeading />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <LandingpageHeading mobile />
        </Responsive>
      </div>
    )
  }  
  
}

export default LandingPage