import React from 'react'
import { Grid, Menu, Dropdown, Segment, Divider } from 'semantic-ui-react'
import GroupCard from './GroupCard'

class BrowseGroup extends React.Component {
  state = {
    groups: this.props.data.groups,
    groupTypeOptions: this.props.data.groupTypeOptions
  }

  render() {
    return (
      <Grid columns={2} >
        <Grid.Column width={3}>
          <Menu vertical fluid borderless>
            <Menu.Item header icon='filter' content='Filter groups' />
            <Divider style={{ marginTop: '0', marginBottom: '0'}}/>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Dropdown clearable options={this.state.groupTypeOptions} placeholder='Group Type' selection fluid />
            </Menu.Item>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Dropdown placeholder='Year of Debut' fluid multiple selection options={this.state.groupTypeOptions} />
            </Menu.Item>
            <Menu.Item style={{ padding: '0.5em'}}>
              <Dropdown placeholder='Company' fluid multiple selection options={this.state.groupTypeOptions} />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Segment fluid>
            <Grid columns={3}>
            {
              this.state.groups.map((grp) => (
                <Grid.Column>
                  <GroupCard group={grp} />
                </Grid.Column>
              ))
            }
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default BrowseGroup