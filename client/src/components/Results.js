import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Result = props => (
  <ListGroup style={{ padding: '1rem', textAlign: 'center' }}>
    { props.name && <ListGroupItem active>{props.name}</ListGroupItem> }
    { props.age && <ListGroupItem>{`name: ${props.age}`}</ListGroupItem> }
    { props.yearsActive && <ListGroupItem>{`yearsActive: ${props.yearsActive}`}</ListGroupItem> }
    { props.image && <ListGroupItem>{`image: ${props.image}`}</ListGroupItem> }
    { props.genre && <ListGroupItem>{`genre: ${props.genre}`}</ListGroupItem> }
    { props.website && <ListGroupItem>{`website: ${props.website}`}</ListGroupItem> }
    { props.labelName && <ListGroupItem>{`labelName: ${props.labelName}`}</ListGroupItem> }
    { props.retired && <ListGroupItem>{`retired: ${props.retired}`}</ListGroupItem> }
  </ListGroup>
);

export default Result
// { props.albums && <ListGroupItem>{props.albums}</ListGroupItem> }
