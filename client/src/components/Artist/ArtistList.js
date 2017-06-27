import React from 'react'
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import Album from './Album'

const styles = {
  display: 'block'
}

const printAlbumInfo = arr => (
  arr.map( (album, index) => {
    return (
      <Album
        key={index}
        image={album.image}
        title={album.title}
        copiesSold={album.copiesSold}
        tracks={album.numberTracks}
      />
    );
  })
);

const ArtistList = props => {
  let artist = props.list[0];
  let albums = artist.albums.length > 0 ? printAlbumInfo(artist.albums) : '';
  return (
    <Row>
      <Col xs="12" sm="12" md="12">
        <ListGroup style={{ maxWidth: '50rem' }}>
          <ListGroupItem>
            <Col xs="3" sm="3" md="3" style={{ alignSelf: 'flex-end'}}>
              <ListGroupItemHeading>My Artist</ListGroupItemHeading>
              <ListGroupItemText>{artist.name}</ListGroupItemText>
            </Col>
            <Col xs="9" sm="9" md="9">
              <img src={artist.image} alt={artist.name}/>
            </Col>
          </ListGroupItem>
          <ListGroupItem style={styles}>
            <ListGroupItemHeading>{artist.yearsActive}</ListGroupItemHeading>
            <ListGroupItemText>Years Active</ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem style={styles}>
            <ListGroupItemHeading>{`$${artist.netWorth.toLocaleString()}`}</ListGroupItemHeading>
            <ListGroupItemText>Net Worth</ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem style={styles}>
            <ListGroupItemHeading>{artist.labelName}</ListGroupItemHeading>
            <ListGroupItemText>Label</ListGroupItemText>
          </ListGroupItem>
          {
            artist.albums.length > 0 && (
              <ListGroupItem>
                <Row>{albums}</Row>
              </ListGroupItem>
            )
          }
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ArtistList
