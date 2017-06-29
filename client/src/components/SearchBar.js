import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import axios from 'axios'

// import components
import NameField from './Search/NameField'
import SortField from './Search/SortField'
import AgeField from './Search/AgeField'
import YearsField from './Search/YearsField'
import Results from './Results'

// NO RESULTS COMPONENT
const NoRecords = () => (
  <div style={{ padding: '1rem', textAlign: 'center' }}>
    <h3>No Records Found!</h3>
    <p>Try searching again</p>
  </div>
);

class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      nameVal: '',
      sortVal: '',
      ageLow: '',
      ageHigh: '',
      yearsLow: '',
      yearsHigh: '',
      artistArray: []
    };
  }

  setName = (e) => {
    let name = e.target.value;
    this.setState({ nameVal: name })
  }
  setSort = (e) => {
    let sort = e.target.value;
    this.setState({ sortVal: sort})
  }
  setLowerAgeLimit = (e) => {
    let lowerAge = e.target.value;
    this.setState({ ageLow: lowerAge })
  }
  setHigherAgeLimit = (e) => {
    let higherAge = e.target.value;
    this.setState({ ageHigh: higherAge})
  }
  setLowerYearsLimit = (e) => {
    let lowerYears = e.target.value;
    this.setState({ yearsLow: lowerYears })
  }
  setHigherYearsLimit = (e) => {
    let higherYears = e.target.value;
    this.setState({ yearsHigh: higherYears})
  }

  // HELPER FUNCTIONS
  printArtists = arr => {
    return arr.map( (artist, index) => {
      return (
        <Results
          key={index}
          id={artist._id}
          name={artist.name}
          age={artist.age}
          yearsActive={artist.yearsActive}
          image={artist.image}
          genre={artist.genre}
          website={artist.website}
          labelName={artist.labelName}
          retired={artist.retired}
        />
      );
    })
  }

  // QUERY FUNCTIONS
  sendQuery = () => {
    let params = {};
    if ( this.state.nameVal ) {
      params.name = this.state.nameVal;
    }
    if ( this.state.ageLow ) {
      params.ageLow = this.state.ageLow;
    }
    if ( this.state.ageHigh ) {
      params.ageHigh = this.state.ageHigh;
    }
    if ( this.state.yearsLow ) {
      params.yearsLow = this.state.yearsLow;
    }
    if ( this.state.yearsHigh ) {
      params.yearsHigh = this.state.yearsHigh;
    }
    if ( this.state.sortVal ) {
      params.sortVal = this.state.sortVal;
    }

    // axios.get('/search/queryArtists', {
    axios.get('/search/queryArtists', {
      params: { criteria: params }
    })
    .then( response => {
      if(response.data.artists){
        this.setState({
          artistArray: response.data.artists
        })
      } else if (response.data.message) {
        console.log(response.data.message);
      }
    })
    .catch( error => {
      console.log(error);
    })
  }

  render() {
    let artists = this.state.artistArray.length > 0 ?
        this.printArtists(this.state.artistArray) : <NoRecords />;
    return(
      <Row>
        <Col xs="12" sm="5"  md="5">
          <h3 style={{ padding: '1rem', textAlign: 'center' }}>Search</h3>
          <NameField name={this.state.setName} nameHandler={this.setName} />
          <AgeField lowerAgeHandler={this.setLowerAgeLimit}
              higherAgeHandler={this.setHigherAgeLimit} />
          <YearsField lowerYearsHandler={this.setLowerYearsLimit}
              higherYearsHandler={this.setHigherYearsLimit} />
          <SortField sortVal={this.state.sortVal} sortHandler={this.setSort} />
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button color="secondary" size="lg" onClick={this.sendQuery}>Submit</Button>
          </div>
        </Col>
        <Col xs="12" sm="7" md="7">
          {artists}
          <div style={{ textAlign: "center"}}>
            { this.state.artistArray.length > 0 &&
              <p>{`${this.state.artistArray.length}`} Records Found</p> }
          </div>
        </Col>
      </Row>
    );
  }
}

export default SearchBar
