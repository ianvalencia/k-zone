import React from 'react';
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class GroupCard extends React.Component {
  render() {
    return (
      <Card>
        
        <Container >
          <Image src={this.props.group.imgURL} fluid/>
        </Container>
        <Card.Content>
          <Card.Header>{this.props.group.groupName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.group.groupType}</span>
          </Card.Meta>
          <Card.Description>{this.props.group.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`/groups/${this.props.group.groupName}`}>
              See more
              <Icon name='chevron right' />
            </Link>
            
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default GroupCard