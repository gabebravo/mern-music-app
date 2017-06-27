import React from 'react'
import { Col, ListGroup, ListGroupItem } from 'reactstrap'

const Album = props => (
  <Col xs="6" sm="6" md="6" style={{ marginBottom: '1rem'}}>
    <img src={props.image} alt={props.title} style={{ maxWidth: '100%' }}/>
    <ListGroup>
      <ListGroupItem>{`Title: ${props.title}`}</ListGroupItem>
      <ListGroupItem>{`Copies Sold: ${props.copiesSold.toLocaleString()}`}</ListGroupItem>
      { props.tracks ? <ListGroupItem>{`Tracks: ${props.tracks}`}</ListGroupItem> : '' }
    </ListGroup>
  </Col>
);

export default Album
