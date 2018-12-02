import React from 'react'
import { Grid, Menu, Segment, Divider, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GroupCard from './GroupCard'

class BrowseGroup extends React.Component {
  state = {
    groups: this.props.data.groups,
    groupTypeOptions: this.props.data.groupTypeOptions,
    typeFilter: [],
    statusFilter: []
  }
  groupTypeOptions = [
    { key: 1, text: 'Boy Group', value:'groupType=Boy Group' },
    { key: 2, text: 'Girl Group', value:'groupType=Girl Group' },
    { key: 3, text: 'Coed', value: 'groupType=Coed' }
  ]
  fetchData() {
    if (this.state.typeFilter.length > 0) {
      var filter = '/?'+(this.state.typeFilter.concat(this.state.statusFilter)).join('&')
    } else {
      var filter = ''
    }
    let url = 'http://localhost:3001/groups'+filter
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({groups: data}))
  }

  componentWillMount() {
    this.fetchData()
    this.setState({typeFilter: []})
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

  handleTypeFilter = (e, { value }) => this.setState({ typefilter: value })
  render() {
    return (
      <Grid columns={2} >
        <Grid.Column width={3}>
          <Menu vertical fluid borderless>
            <Menu.Item header content='Cannot find group?' />
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
            {/* <Menu.Item style={{ padding: '0.5em'}}>
              <Dropdown 
                multiple 
                options={this.groupTypeOptions} 
                placeholder='Add group type filter...' 
                selection 
                fluid 
                //value={this.state.typeFilter}
                onChange={this.handleTypeFilter}
              />
            </Menu.Item>
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/> */}
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
          {/* <Menu vertical fluid borderless>
            <Menu.Item header icon='add circle' content='Add a Group' />
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Dropdown 
                multiple 
                options={this.state.groupTypeOptions} 
                placeholder='Group Type' 
                selection 
                fluid 
                value={this.state.filter}
                onChange={this.handleFilter}
              >
              </Dropdown>
            </Menu.Item>
          </Menu> */}
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

export default BrowseGroup