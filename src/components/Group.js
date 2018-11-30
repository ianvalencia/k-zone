import React from 'react';
import { Segment, Header, Image, Divider, Card, Container, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
class Group extends React.Component {
   
  render () {
    const group = this.props.data
    return (
      <Container text>
        <Segment fluid>
      	  <Container style={{ height: '256px', width: '256px' }}>
      		  <Image src={group.imgURL} centered  fluid/>
      	  </Container>
          <Header as='h1' textAlign='center'>{`${group.groupName}`}</Header>
          <Divider />
          <Grid columns={2} divided>
            <Grid.Column textAlign='center'>
              <Header as='h3'>Group Details</Header>
              <Segment fluid secondary textAlign='left'>
                <Grid columns={2} verticalAlign='middle'>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Description</Header>
                    </Grid.Column>
                    <Grid.Column >
                      <p>{group.description}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Group Type</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <p>{group.groupType}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Debut Date</Header>
                    </Grid.Column>
                    <Grid.Column >
                      <p>{group.debutDate}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Company</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <p>{group.company}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Fandom Name</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <p>{group.fandomName}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Fandom Color</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <p>{group.fandomColor}</p>
                    </Grid.Column>	
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as='h5'>Status</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <p>{group.status}</p>
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
                  image={group.imgURL}
                  header={group.groupName}
                  //meta='Friend'
                  //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

                />
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
















          
          
        </Segment>
      </Container>

    )
  }
}

export default Group