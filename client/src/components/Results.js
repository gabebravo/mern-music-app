import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Result = props => (
  <ListGroup style={{ padding: '1rem', textAlign: 'center' }}>
    { props.image && <ListGroupItem>{<img src={`${props.image}`} alt='artist' className="rounded-circle"/>}</ListGroupItem> }
    { props.name && <ListGroupItem active>{props.name}<Link to={`/artistInfo/${props.id}`}>
        <i style={{marginLeft: '1rem', color: '#FFC107' }} className="fa fa-info-circle fa-2x"></i>
      </Link></ListGroupItem> }
    { props.age && <ListGroupItem>{`Age: ${props.age}`}</ListGroupItem> }
    { props.yearsActive >= 0 && <ListGroupItem>{`Years Active: ${props.yearsActive}`}</ListGroupItem> }
    { props.genre && <ListGroupItem>{`Genre: ${props.genre}`}</ListGroupItem> }
    { props.website && <ListGroupItem>{`Website: ${props.website}`}</ListGroupItem> }
    { props.labelName && <ListGroupItem>{`Label Name: ${props.labelName}`}</ListGroupItem> }
    { props.retired && <ListGroupItem>{`Retired: ${props.retired}`}</ListGroupItem> }
  </ListGroup>
);

export default Result;
