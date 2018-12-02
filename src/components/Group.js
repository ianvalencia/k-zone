import React from 'react';
import { Segment, Header, Image, Divider, Card, Container, Grid, Icon, Form, Button, Label } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom'

class Group extends React.Component {
  state = {
    editFormOpen: false,
    loaded: false,
    group: {},
  } 

  fetchData() {
    let url = 'http://localhost:3001/groups/'+this.props.grpId
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({group: data}))
  }

  componentWillMount() {
    this.fetchData()
    this.setState({loaded: true})
  }

  componentDidMount() {

  }

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  };

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty('group')) {
      this.setState({ group: Object.assign(this.state.group, {[name]: value}) });
    }
  }
  
  handleDelete = (e) => {
    this.props.onDeleteClick(this.state.group.id)
  }

  handleRedirect = () => {
      this.props.history.push('/browse/groups')
    }
    


  handleSubmit = () => {
    this.props.onFormSubmit(this.state.group);

    this.handleFormClose()
  };

  render () {

    if (this.state.editFormOpen) {
      return (
        <Container text>
          <Segment fluid>
            
            <Header as='h1' textAlign='left'>Edit Group</Header>
            <Divider />
            <Form>
              <Form.Group equal>
                <Form.Input 
                  readOnly
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
                  <Button content='Save' onClick={this.handleSubmit} type='button' positive />
                  <Button.Or />
                  <Button content='Cancel' onClick={this.handleFormClose} />
                </Button.Group>
              </Grid>
              
            </Form>
            
          </Segment>
        </Container>
      )
    } else {
      return (
        <Container text>
          <Segment fluid>
            <Button.Group floated='right' size='tiny' basic>
              <Button onClick={this.handleFormOpen}>
                <Icon name='edit' />
                Edit
              </Button>
              <Button negative onClick={this.handleDelete} as={Link} to='/browse/groups'>
                <Icon name='delete' />
                Delete
              </Button>
            </Button.Group>
            <Container style={{ height: '256px', width: '256px' }}>
              <Image src={this.state.group.imgURL} centered  fluid/>
            </Container>
            <Header as='h1' textAlign='center'>{`${this.state.group.groupName}`}</Header>
            <Divider />
            <Header as='h3' textAlign='center' style={{marginTop: '0px'}}>Description</Header>
            <p style={{textAlign: 'center'}}>{this.state.group.description}</p>
            <Divider />
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Header as='h3'>Group Details</Header>
                  <Segment fluid secondary textAlign='left'>
                    <Grid columns={2} verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Group Type</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.group.groupType}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Debut Date</Header>
                        </Grid.Column>
                        <Grid.Column >
                          <p>{this.state.group.debutDate}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Company</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.group.company}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Fandom Name</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.group.fandomName}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Fandom Color</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.group.fandomColor}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Status</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.group.status}</p>
                        </Grid.Column>	
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Header as='h3'>Members</Header>
                  <Grid columns={2} >
                    <Grid.Column>
                    <Card
                      image={this.state.group.imgURL}
                      header={this.state.group.groupName}
                    />
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>        
          </Segment>
        </Container>
      )
    }
  }
}

export default Group