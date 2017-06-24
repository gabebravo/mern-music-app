import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

// imported components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'

class ArtistContainer extends Component {
  constructor(){
    super();
    this.state = {
      artist: []
    }
  }

  render(){
    return(
      <Container>
        <Header />
        <Row>
          <SearchBar />
          <Results />
        </Row>
      </Container>
    );
  }

}

export default ArtistContainer;
