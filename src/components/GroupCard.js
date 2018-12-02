import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Container } from 'semantic-ui-react'

class GroupCard extends React.Component {
  shortenDescription = (desc) => {
    if (desc.length>60) {
      return desc.slice(0,60)+'...'
    } else {
      return desc
    }
  }


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
          <Card.Description>
          {
            this.shortenDescription(this.props.group.description)
          }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`/groups/${this.props.group.id}`}>
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