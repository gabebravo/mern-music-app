import React, { Component } from 'react'
import { Container } from 'reactstrap'

// imported components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'

class SearchContainer extends Component {
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
        <Results />
      </Container>
    );
  }

}

export default SearchContainer;
