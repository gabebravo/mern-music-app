import React, { Component } from 'react'
import { Container } from 'reactstrap'

// imported components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

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
        <SearchBar />
      </Container>
    );
  }

}

export default ArtistContainer;
