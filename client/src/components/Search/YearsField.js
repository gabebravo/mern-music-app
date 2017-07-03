import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

class YearsField extends Component {
  constructor(props){
    super(props);

    this.state = {
      limits: []
    }
  }

  componentDidMount(){
    axios.get('/search/yearsRange')
      .then( response => {
        this.setState({
          limits: response.data.limits
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render(){
    let placeholderText = this.state.limits.length > 0 ?
      `limit: ${this.state.limits[0]} to ${this.state.limits[1]}` : ''
    return(
      <div>
        <Label for="yearsActive">Years Active</Label>
        <Form inline style={{ marginBottom: '1rem' }}>
          <FormGroup style={{ marginRight: '3rem' }}>
            <Input type="text" name="lowerYears" id="lowerYears"
              onChange={this.props.lowerYearsHandler} placeholder={`lower ${placeholderText}`}  />
          </FormGroup>{' '}
          <FormGroup>
            <Input type="text" name="higherYears" id="higherYears"
              onChange={this.props.higherYearsHandler} placeholder={`higher ${placeholderText}`} />
          </FormGroup>{' '}
        </Form>
      </div>
    );
  }
}

YearsField.propTypes = {
  lowerYearsHandler: PropTypes.func,
  higherYearsHandler: PropTypes.func
}

export default YearsField
