import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Dropdown, List, Divider, Grid, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const groupTypeOptions = [
  { key: 1, text: 'Boy Group', value:'Boy Group' },
  { key: 2, text: 'Girl Group', value:'Girl Group' },
  { key: 3, text: 'Coed', value: 'Coed' },
]

class GroupsContainer extends Component {
  state = {
    groups: [
      {
        groupName: '',
        groupType: '', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imageURL: '' // links lang ilalagay
      }
    ]
  }

  

  render() {
    return(
      <Container>
        <Grid columns={2} style={{ marginTop: '5em'}}>
          <Grid.Column width={3}>
            <Menu vertical fluid borderless>
              <Menu.Item header icon='filter' content='Filter groups' />
              <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
              <Menu.Item style={{ padding: '0.5em'}}>
                <Dropdown clearable options={groupTypeOptions} placeholder='Group Type' selection fluid />
              </Menu.Item>
              <Menu.Item style={{ padding: '0.5em'}}>
                <Dropdown placeholder='Year of Debut' fluid multiple selection options={groupTypeOptions} />
              </Menu.Item>
              <Menu.Item style={{ padding: '0.5em'}}>
                <Dropdown placeholder='Company' fluid multiple selection options={groupTypeOptions} />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment fluid />
          </Grid.Column>
        
        </Grid>
      </Container>
    
    )
  }  
  
}

export default GroupsContainer