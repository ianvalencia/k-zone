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


class CreateArtist extends React.Component {
  state = { 
    artist: {},
    groupOptions: []
  }
  fetchData() {
    let url = 'http://localhost:5000/groups'
    fetch(url)
      .then(resp => resp.json())
      .then(data => data.map((grp) => Object.assign({}, {text: grp.groupName, value: grp.id})))
      .then(options => this.setState({ groupOptions: options }))
  }

  componentDidMount() {
    this.setState({ artist: {
      stageName: '',
      birthName: '',
      birthday: '',
      gender: '',
      nationality: '',
      groupId: '',
      imgURL: '',
    }})

    this.fetchData()
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state.artist);
  };

  handleChange = (e, { name, value }) => {
    if (this.state.hasOwnProperty('artist')) {
      this.setState({ artist: Object.assign(this.state.artist, {[name]: value}) });
    }
  }

  render () {
    return (
      <Container text>
        <Segment fluid>
          <Header as='h1' textAlign='left'>Create Artist</Header>
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
                <Button content='Save' onClick={this.handleSubmit} type='button' positive as={Link} to='/browse/artists' />
                <Button.Or />
                <Button content='Cancel' as={Link} to='/browse/artists'/>
              </Button.Group>
            </Grid>
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default CreateArtist