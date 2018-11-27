import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class DesktopNavbar extends Component {

  render() {


    return ( 
      <Menu inverted borderless size='large' >
        <Container>
          <Menu.Item header as={Link}
              to='/'>K-ZONE</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              color='green'
              as={Link}
              to='/'
            >
              Home
            </Menu.Item>
            <Dropdown item text='Browse'>
              <Dropdown.Menu>
                <Dropdown.Item text='Groups' as={Link} to='/groups' />
                <Dropdown.Item text='Artists' as={Link} to='/artists' />
                <Dropdown.Item text='Albums' as={Link} to='/albums' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>   
        </Container>
      </Menu>
    )
  }
}

class MobileNavbar extends Component {
  render() {
    return (
      <Responsive as={Segment} {...Responsive.onlyMobile}>
        Mobile
      </Responsive>
    )
  }
}

const ResponsiveNavbar = ({ }) => (
  <div>
    <DesktopNavbar />
  </div>

);

export default ResponsiveNavbar;