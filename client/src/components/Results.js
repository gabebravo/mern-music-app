import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

// findArtist = () => {
//
// }

const Result = props => (
  <ListGroup style={{ padding: '1rem', textAlign: 'center' }}>
    { props.image && <ListGroupItem>{<img src={`${props.image}`} alt='artist' className="rounded-circle"/>}</ListGroupItem> }
    { props.name && <ListGroupItem active>{props.name}
      <i style={{marginLeft: '1rem'}} className="fa fa-info-circle fa-2x"></i></ListGroupItem> }
    { props.age && <ListGroupItem>{`age: ${props.age}`}</ListGroupItem> }
    { props.yearsActive >= 0 && <ListGroupItem>{`yearsActive: ${props.yearsActive}`}</ListGroupItem> }
    { props.genre && <ListGroupItem>{`genre: ${props.genre}`}</ListGroupItem> }
    { props.website && <ListGroupItem>{`website: ${props.website}`}</ListGroupItem> }
    { props.labelName && <ListGroupItem>{`labelName: ${props.labelName}`}</ListGroupItem> }
    { props.retired && <ListGroupItem>{`retired: ${props.retired}`}</ListGroupItem> }
  </ListGroup>
);

export default Result
// { props.albums && <ListGroupItem>{props.albums}</ListGroupItem> }
