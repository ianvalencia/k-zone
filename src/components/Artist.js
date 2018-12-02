import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Segment, 
  Header, 
  Image, 
  Divider, 
  Container, 
  Grid, Icon, 
  Form, 
  Button, 
} from 'semantic-ui-react';

class Artist extends React.Component {
  state = {
    editFormOpen: false,
    artist: {},
    groupOptions: []
  } 

  fetchData() {
    let url = 'http://localhost:3001/artists/'+this.props.artistId
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ artist: data }))

    url = 'http://localhost:3001/groups'
    fetch(url)
      .then(resp => resp.json())
      .then(data => data.map((grp) => Object.assign({}, {text: grp.groupName, value: grp.id})))
      .then(options => this.setState({ groupOptions: options }))
  }

  componentWillMount() {
    this.fetchData()
    
  }

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  }

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  }

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty('artist')) {
      this.setState({ artist: Object.assign(this.state.artist, {[name]: value}) });
    }
  }
  
  handleDelete = (e) => {
    this.props.onDeleteClick(this.state.artist.id)
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state.artist);
    this.handleFormClose()
  }

  extractGroup = () => {
    var group = this.state.groupOptions.find(
      (a) => a.value === this.state.artist.groupId
    )
    if (group === undefined) {
      return (<p>-</p>)
    }
    if (this.state.artist.groupId == '' ) {
      return (<p>-</p>)
    }
    return (<Link to={`/groups/${group.value}`}>{group.text}</Link>) 
  }

  render () {
    if (this.state.artist.id === undefined) {
      return (
        <Container text>
          <Segment fluid>
            <Grid centered style={{ margin: '20px' }}>
              <Grid.Row>
                <Header as='h2' icon>
                  <Icon name='settings' />
                  Artist Not Found
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Button positive as={Link} to='/browse/artists' content='Go back to browsing artists' icon='left chevron'/>
              </Grid.Row>
              
            </Grid>
          </Segment>
        </Container>
      )
    }
    if (this.state.editFormOpen) {
      return (
        <Container text>
          <Segment fluid>
            <Header as='h1' textAlign='left'>Edit Artist</Header>
            <Divider />
            <Form>
              <Form.Group equal>
                <Form.Input 
                  placeholder='Stage Name' 
                  name='stageName' 
                  value={this.state.artist.stageName}
                  label='Stage Name'
                  onChange={this.handleChange} 
                />
                <Form.Input 
                  placeholder='Birth Name' 
                  name='birthName' 
                  value={this.state.artist.birthName}
                  label='Birth Name'
                  onChange={this.handleChange} 
                />
                <Form.Select
                  name='gender'
                  value={this.state.artist.gender}
                  label='Gender'
                  options={[{text: 'Male', value: 'Male'}, {text: 'Female', value: 'Female'}, {text: 'Others', value: 'Others'}]}
                  onChange={this.handleChange} 
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  placeholder='Month Day, Year'
                  name='birthday'
                  value={this.state.artist.birthday}
                  label='Birthday'
                  onChange={this.handleChange} 
                />
                <Form.Input
                  placeholder='Nationality'
                  name='nationality'
                  value={this.state.artist.nationality}
                  label='Nationality'
                  onChange={this.handleChange} 
                />
                <Form.Select
                  name='groupId'
                  value={this.state.artist.groupId}
                  label='Group'
                  options={this.state.groupOptions}
                  onChange={this.handleChange} 
                />
              </Form.Group>
              <Form.Input
                  placeholder='Image URL'
                  name='imgURL'
                  value={this.state.artist.imgURL}
                  label='Image URL'
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
              <Image src={this.state.artist.imgURL} centered  fluid/>
            </Container>
            <Header as='h1' textAlign='center'>{`${this.state.artist.stageName}`}</Header>
            <Divider />
            <Grid centered>
              <Grid.Column textAlign='center'>
                <Header as='h3'>Artist Details</Header>
                <Segment fluid secondary textAlign='left'>
                  <Grid columns={2} verticalAlign='middle'>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Header as='h5'>Birth Name</Header>
                      </Grid.Column>
                      <Grid.Column>
                        <p>{this.state.artist.birthName}</p>
                      </Grid.Column>	
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Header as='h5'>Birthday</Header>
                      </Grid.Column>
                      <Grid.Column >
                        <p>{this.state.artist.birthday}</p>
                      </Grid.Column>	
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Header as='h5'>Nationality</Header>
                      </Grid.Column>
                      <Grid.Column>
                        <p>{this.state.artist.nationality}</p>
                      </Grid.Column>	
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Header as='h5'>Gender</Header>
                      </Grid.Column>
                      <Grid.Column>
                        <p>{this.state.artist.gender}</p>
                      </Grid.Column>	
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={6}>
                        <Header as='h5'>Group</Header>
                      </Grid.Column>
                      <Grid.Column>
                        {this.extractGroup()}
                      </Grid.Column>	
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Grid.Column> 
            </Grid>      
          </Segment>
        </Container>
      )
    }
  }
}

export default Artist