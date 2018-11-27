import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Dropdown, List, Divider, Grid, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
//import Group from './Group'
import BrowseGroup from './BrowseGroups';
const groupTypeOptions = [
  { key: 1, text: 'Boy Group', value:'Boy Group' },
  { key: 2, text: 'Girl Group', value:'Girl Group' },
  { key: 3, text: 'Coed', value: 'Coed' },
]

class GroupsContainer extends Component {
  state = {
    groups: [
      {
        groupName: 'NCT 127',
        groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imgURL: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/63/cc/b4/63ccb404-eb7a-a3f0-4dc9-152540bc161f/NCT_127_Cover.jpg/268x0w.jpg', // links lang ilalagay
        description: 'Issa good boy group from SM'
      },
      {
        groupName: 'Stray Kids',
        groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imgURL: 'https://lastfm-img2.akamaized.net/i/u/770x0/dd9393d96f6b5b33cdd6e90f35b680fd.jpg', // links lang ilalagay
        description: 'Issa good boy group from JYP'
      },
      {
        groupName: 'LOONA',
        groupType: 'Girl Group', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imgURL: 'https://lastfm-img2.akamaized.net/i/u/ar0/7e9fbb03749066e1d58b6e9261fdbbbc.jpg', // links lang ilalagay
        description: 'BBC\'s bbs'
      },
      {
        groupName: 'Seventeen',
        groupType: 'Boy Group', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imgURL: 'https://i.scdn.co/image/7b90f0bfdce832e113edba285d7aad9c283eb3d7', // links lang ilalagay
        description: 'WAAAAAAAAAAAAAA'
      },
      {
        groupName: 'SNSD',
        groupType: 'Girl Group', // Boy Group, Girl Group, Co-ed 
        debutDate: '',
        company: '',
        fandomName: '',
        fandomColor: '',
        status: '', // Active, Disbanded
        members: [], // ID ng members dito
        imgURL: 'https://lastfm-img2.akamaized.net/i/u/ar0/6cb5367bf92f061d3bfac9277161e3c2.jpg', // links lang ilalagay
        description: 'OG Nation\'s girl group'
      }
    ],
    groupTypeOptions: [
      { key: 1, text: 'Boy Group', value:'Boy Group' },
      { key: 2, text: 'Girl Group', value:'Girl Group' },
      { key: 3, text: 'Coed', value: 'Coed' }
    ]
  }

  

  render() {
    return(
      <Container style={{ marginTop: '2em'}}>
        <BrowseGroup data={this.state} />
      </Container>
    
    )
  }  
  
}

export default GroupsContainer