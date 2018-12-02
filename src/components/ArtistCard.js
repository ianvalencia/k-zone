import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Container } from 'semantic-ui-react'

class ArtistCard extends React.Component {
  render() {
    return (
      <Card>
        <Container >
          <Image src={this.props.artist.imgURL} fluid/>
        </Container>
        <Card.Content>
          <Card.Header>{this.props.artist.stageName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.artist.birthName}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`/artists/${this.props.artist.id}`}>
              See more
              <Icon name='chevron right' />
            </Link>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default ArtistCard