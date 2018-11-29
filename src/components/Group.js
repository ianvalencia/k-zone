import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

class Group extends React.Component {
   
  render () {
    const group = this.props.data
    return (
      <Segment fluid>
        <p>{`${group.groupName}`}</p>
      </Segment>

    )
  }
}

export default Group