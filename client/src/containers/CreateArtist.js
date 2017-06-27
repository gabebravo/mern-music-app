import React, { Component } from 'react'
import { Container, Row, Button } from 'reactstrap'
import axios from 'axios'

import Header from '../components/Header'
import TextInput from '../components/Create/TextInput'
import PopModal from '../components/PopModal'

class createArtist extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      yearsActive: '',
      genre: '',
      modal: false,
      message: ''
    }
  }

// POST REQUEST
  postNewArtist = () => {
    axios.post('/artist/create', {
      artist: this.state
    })
    .then( response => {
      this.toggleModal(response.data.message);
      console.log(response.data.message);
    })
    .catch( error => {
      console.log(error);
    })
  }

// HELPER FUNCTIONS
  updateName = (e) => {
    let nameVal = e.target.value;
    this.setState({ name: nameVal })
  }
  updateAge = (e) => {
    let ageVal = e.target.value;
    this.setState({ age: ageVal })
  }
  updateYearsActive = (e) => {
    let yearsVal = e.target.value;
    this.setState({ yearsActive: yearsVal })
  }
  updateGenre = (e) => {
    let genreVal = e.target.value;
    this.setState({ genre: genreVal })
  }
  toggleModal = (text = '') => {
    this.setState({
      name: '',
      age: '',
      yearsActive: '',
      genre: '',
      modal: !this.state.modal,
      message: text
    });
  }

  render(){
    return(
      <Container>
        <Header />
        <Row style={{ marginTop: '2rem'}}>
          <TextInput field='name' title='Name' value={this.state.name}
            handlerFunc={this.updateName} placeholder={`Enter the artist's name`} />
          <TextInput field='age' title='Age' value={this.state.age}
            handlerFunc={this.updateAge} placeholder={`Enter the artist's age`} />
          <TextInput field='yearsActive' title='Years Active' value={this.state.yearsActive}
            handlerFunc={this.updateYearsActive} placeholder={`Enter the number of years the artist's been active`} />
          <TextInput field='genre' title='Genre' value={this.state.genre}
            handlerFunc={this.updateGenre} placeholder={`Enter the artist's music genre`} />
        </Row>
        <Button color="secondary" size="lg" onClick={this.postNewArtist}>Submit</Button>
        <PopModal boolVal={this.state.modal} modalHandler={this.toggleModal}
          title='Sucess' message={this.state.message}/>
      </Container>
    );
  }
}

export default createArtist
