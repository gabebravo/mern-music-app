import React, { Component } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

// IMPORTANT COMPONENTS
import Header from '../components/Header'
import NavLinks from '../components/Artist/NavLinks'
import ArtistList from '../components/Artist/ArtistList'

class ArtistContainer extends Component {
  constructor(){
    super();
    this.state = {
      artist: null
    }
  }

  componentDidMount() {
    axios.get('/artist/random')
    .then( response => {
      if(response.data.artist){
        this.setState({ artist: response.data.artist })
      } else if (response.data.artist) {
        // print message
      }
    })
    .catch( error => {
      console.log(error);
    })
  }

  render(){
      let artist = this.state.artist ? <ArtistList list={this.state.artist}/> : <div></div>;
      return(
        <Container>
          <Header />
          <NavLinks />
          {artist}
        </Container>
    );
  }
}

export default ArtistContainer
