import React, { Component } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

// IMPORTANT COMPONENTS
import Header from '../components/Header'
import NavLinks from '../components/Artist/NavLinks'
import ArtistList from '../components/Artist/ArtistList'
import PopModal from '../components/PopModal'

class ArtistContainer extends Component {
  constructor(){
    super();
    this.state = {
      artist: null,
      modal: false,
      message: ''
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

  deleteArtist = () => {
    const artistId = this.state.artist["0"]._id;
    axios.delete('/artist/delete', {
      data: { id: artistId }
    })
      .then( response => {
        this.toggleModal(response.data.message);
        console.log(response.data.message);
      })
      .catch( error => {
        console.log(error);
      })
  }

  toggleModal = (text = '') => {
    console.log(this.state.modal);
    this.setState({
      modal: !this.state.modal,
      message: text
    });
  }

  refreshPage = () => {
    this.setState({
      modal: !this.state.modal,
      message: ''
    });
    window.location.reload();
  }

  render(){
      let artist = this.state.artist ? <ArtistList list={this.state.artist}/> : <div></div>;
      return(
        <Container>
          <Header />
          <NavLinks handleDelete={this.deleteArtist}/>
          {artist}
          <PopModal boolVal={this.state.modal} modalHandler={this.refreshPage}
            title='Sucess' message={this.state.message}/>
        </Container>
    );
  }
}

export default ArtistContainer
