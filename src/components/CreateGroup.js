import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Header, 
  Divider, 
  Container, 
  Grid, 
  Form, 
  Button, 
} from 'semantic-ui-react';


class CreateGroup extends React.Component {
  state = { 
    group: {}
  }

  componentDidMount() {
    this.setState({ group: {
      groupName: '',
      groupType: '',
      debutDate: '',
      company: '',
      fandomName: '',
      fandomColor: '',
      status: '',
      members: [],
      imgURL: '',
      description: '',
    }})
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state.group);
  };

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty('group')) {
      this.setState({ group: Object.assign(this.state.group, {[name]: value}) });
    }
  }

  render () {
    return (
      <Container text>
        <Segment fluid>
          <Header as='h1' textAlign='left'>Create Group</Header>
          <Divider />
          <Form>
            <Form.Group equal>
              <Form.Input 
                placeholder='Group Name' 
                name='groupName' 
                value={this.state.group.groupName}
                label='Group Name'
                onChange={this.handleChange} 
              />
              <Form.Select
                name='groupType'
                value={this.state.group.groupType}
                label='Group Type'
                options={[{text: 'Boy Group', value: 'Boy Group'}, {text: 'Girl Group', value: 'Girl Group'}]}
                onChange={this.handleChange} 
              />
              <Form.Input 
                placeholder='Company' 
                name='company' 
                value={this.state.group.company}
                label='Company'
                onChange={this.handleChange} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                placeholder='Month Day, Year'
                name='debutDate'
                value={this.state.group.debutDate}
                label='Debut Date'
                onChange={this.handleChange} 
              />
              <Form.Select
                name='status'
                value={this.state.group.status}
                label='Status'
                options={[{text: 'Active', value: 'Active'}, {text: 'Disbanded', value: 'Disbanded'}]}
                onChange={this.handleChange} 
              />
            </Form.Group>
            <Form.Group equal>
              <Form.Input
                placeholder='Fandom Name'
                name='fandomName'
                value={this.state.group.fandomName}
                label='Fandom Name'
                onChange={this.handleChange} 
              />
              <Form.Input
                placeholder='Fandom Color'
                name='fandomColor'
                value={this.state.group.fandomColor}
                label='Fandom Color'
                onChange={this.handleChange} 
              />             
            </Form.Group>
            <Form.Input
                placeholder='Image URL'
                name='imgURL'
                value={this.state.group.imgURL}
                label='Image URL'
                onChange={this.handleChange} 
            />
            <Form.Input
                placeholder='Description'
                name='description'
                value={this.state.group.description}
                label='Description'
                onChange={this.handleChange} 
            />
            <Grid centered style={{ marginTop: '15px', marginBottom: '10px'}}>
              <Button.Group>
                <Button content='Save' onClick={this.handleSubmit} type='button' positive as={Link} to='/browse/groups' />
                <Button.Or />
                <Button content='Cancel' as={Link} to='/browse/groups'/>
              </Button.Group>
            </Grid> 
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default CreateGroup