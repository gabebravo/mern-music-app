import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// IMPORTANT COMPONENTS
import Header from '../components/Header'
import NavLinks from '../components/Artist/NavLinks'
import ArtistList from '../components/Artist/ArtistList'
import PopModal from '../components/PopModal'
 import PropTypes from 'prop-types'

class ArtistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      artist: null,
      modal: false,
      message: '',
      editPage: false
    }
  }

  componentDidMount() {
    if(this.props.artistId){
      console.log('not random');
      axios.get('/artist/findOne', {
        params: { id: this.props.artistId }
      })
      .then( response => {
        if(response.data.artist){
          this.setState({ artist: response.data.artist })
        } else if (response.data.message) {
          console.log(response.data.message);
        }
      })
      .catch( error => {
        console.log(error);
      })
    } else {
      console.log('random');
      axios.get('/artist/random')
      .then( response => {
        if(response.data.artist){
          this.setState({ artist: response.data.artist })
        } else if (response.data.message) {
          console.log(response.data.message);
        }
      })
      .catch( error => {
        console.log(error);
      })
    }
  }

  componentWillUnmount(){
    this.setState({
      editPage: false
    });
  }

  deleteArtist = () => {
    const artistId = this.state.artist["0"]._id;
    axios.delete('/artist/delete', {
      data: { id: artistId }
    })
      .then( response => {
        console.log(response.data.message);
        this.toggleModal(response.data.message);
      })
      .catch( error => {
        console.log(error);
      })
  }

  updateArtist = () => {
    this.setState({
      editPage: true
    });
  }

  toggleModal = (text = '') => {
    console.log(this.state.modal);
    console.log(text);
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

// NOTE: <Redirect> uses 'push' keyword to add the page transition to the history
// 2nd state param is the object that will be passed as state in the redirect
  render(){
      let artist = this.state.artist ? <ArtistList list={this.state.artist}/> : <div></div>;
      let jumpToEditPage = this.state.editPage ?
       <Redirect push to={{ pathname: `/editArtist`, state: { artist: this.state.artist } }}/> : <div></div>;
      return(
        <Container>
          {jumpToEditPage}
          <Header />
          <NavLinks handleDelete={this.deleteArtist} handleUpdate={this.updateArtist}/>
          {artist}
          <PopModal boolVal={this.state.modal} modalHandler={this.refreshPage}
            title='Sucess' message={this.state.message}/>
        </Container>
    );
  }
}

ArtistContainer.propTypes = {
  artistId: PropTypes.string
}

export default ArtistContainer
