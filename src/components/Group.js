import React from 'react';
import { Segment, Header, Image, Divider, Card, Container, Grid, Icon, Form, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
class Group extends React.Component {
  state = {
    editFormOpen: false,
    groupName: this.props.data.groupName,
    groupType: this.props.data.groupType,
    debutDate: this.props.data.debutDate,
    company: this.props.data.company,
    fandomName: this.props.data.fandomName,
    fandomColor: this.props.data.fandomColor,
    status: this.props.data.status,
    members: this.props.data.members,
    imgURL: this.props.data.imgURL,
    description: this.props.data.description,
  } 

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  };

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  handleSubmit = () => {
    this.props.onFormSubmit({
      groupName: this.state.groupName,
      groupType: this.state.groupType,
      debutDate: this.state.debutDate,
      company: this.state.company,
      fandomName: this.state.fandomName,
      fandomColor: this.state.fandomColor,
      status: this.state.status,
      members: this.state.members,
      imgURL: this.state.imgURL,
      description: this.state.description,
    });

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
                  value={this.state.groupName}
                  label='Group Name'
                  onChange={this.handleChange} 
                />
                
                <Form.Input
                  placeholder='Month Day, Year'
                  name='debutDate'
                  value={this.state.debutDate}
                  label='Debut Date'
                  onChange={this.handleChange} 
                />
                <Form.Select
                  name='groupType'
                  value={this.state.groupType}
                  label='Group Type'
                  options={[{text: 'Boy Group', value: 'Boy Group'}, {text: 'Girl Group', value: 'Girl Group'}]}
                  onChange={this.handleChange} 
                />
                
              </Form.Group>
              <Form.Button content='Save' onClick={this.handleSubmit} />
              <Form.Button content='Cancel' onClick={this.handleFormClose} />
            </Form>
          </Segment>
        </Container>
      )
    } else {
      return (
        <Container text>
          <Segment fluid>
            <Button floated='right' size='tiny' basic onClick={this.handleFormOpen}>
              <Icon name='edit' />
              Edit
            </Button>
            <Container style={{ height: '256px', width: '256px' }}>
              <Image src={this.state.imgURL} centered  fluid/>
            </Container>
            <Header as='h1' textAlign='center'>{`${this.state.groupName}`}</Header>
            <Divider />
            <Header as='h3' textAlign='center' style={{marginTop: '0px'}}>Description</Header>
            <p style={{textAlign: 'center'}}>{this.state.description}</p>
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
                          <p>{this.state.groupType}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Debut Date</Header>
                        </Grid.Column>
                        <Grid.Column >
                          <p>{this.state.debutDate}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Company</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.company}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Fandom Name</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.fandomName}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Fandom Color</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.fandomColor}</p>
                        </Grid.Column>	
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={6}>
                          <Header as='h5'>Status</Header>
                        </Grid.Column>
                        <Grid.Column>
                          <p>{this.state.status}</p>
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
                      image={this.state.imgURL}
                      header={this.state.groupName}
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