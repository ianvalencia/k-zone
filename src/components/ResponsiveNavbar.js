import React, { Component } from 'react'
import { Menu, Container, Dropdown } from 'semantic-ui-react'
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
                <Dropdown.Item text='Groups' as={Link} to='/browse/groups' />
                <Dropdown.Item text='Artists' as={Link} to='/browse/artists' />
                <Dropdown.Item text='Albums' as={Link} to='/browse/albums' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>   
        </Container>
      </Menu>
    )
  }
}


const ResponsiveNavbar = () => (
  <div>
    <DesktopNavbar />
  </div>
);

export default ResponsiveNavbar;