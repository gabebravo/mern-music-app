import React, { Component } from 'react'
import { Col, Button } from 'reactstrap'

// import components
import NameField from './Form/NameField'
import SortField from './Form/SortField'
import AgeField from './Form/AgeField'
import YearsField from './Form/YearsField'

class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      nameVal: '',
      sortVal: '',
      ageLow: '',
      ageHigh: '',
      yearsLow: '',
      yearsHigh: ''
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

  render() {
    return(
      <Col xs="12" sm="7"  md="5">
        <h3 style={{ padding: '1rem', textAlign: 'center' }}>Search</h3>
        <NameField name={this.state.setName} nameHandler={this.setName} />
        <AgeField lowerAgeHandler={this.setLowerAgeLimit}
            higherAgeHandler={this.setHigherAgeLimit} />
        <YearsField lowerYearsHandler={this.setLowerYearsLimit}
            higherYearsHandler={this.setHigherYearsLimit} />
        <SortField sortVal={this.state.sortVal} sortHandler={this.setSort} />
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Button color="secondary" size="lg">Submit</Button>
        </div>
      </Col>
    );
  }
}

export default SearchBar
