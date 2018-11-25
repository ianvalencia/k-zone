import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class DesktopNavbar extends Component {
  state = {
    //activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    //this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <Segment
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em', borderRadius: 0 }}
        >
          <Menu fixed='top' inverted borderless size='large' >
            <Container>
              <Menu.Item header>K-ZONE</Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  color='green'
                  as={Link}
                  to='/home'
                >
                  Home
                </Menu.Item>

                <Menu.Item 
                  name='browse' 
                  active={activeItem === 'browse'} 
                  onClick={this.handleItemClick}
                  color='green'
                >
                  <Dropdown text='Browse'>
                    <Dropdown.Menu>
                      <Dropdown.Item text='Groups' />
                      <Dropdown.Item text='Artists' />
                      <Dropdown.Item text='Albums' />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

              </Menu.Menu>
             
            </Container>
            
          </Menu>
        </Segment>
        
      </Responsive>
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
    <MobileNavbar />
  </div>

);

export default ResponsiveNavbar;