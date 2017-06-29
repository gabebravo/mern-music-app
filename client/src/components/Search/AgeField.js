import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class AgeField extends Component {
  constructor(props){
    super(props);

    this.state = {
      limits: []
    }
  }

  componentDidMount(){
    axios.get('/search/ageRange')
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
      `limit: ${this.state.limits[0]} to ${this.state.limits[1]}` : '';
    return(
      <div>
        <Label for="ageRange">Age Range</Label>
        <Form inline style={{ marginBottom: '1rem' }}>
          <FormGroup style={{ marginRight: '3rem' }}>
            <Input type="text" name="lowerAge" id="lowerAge"
              onChange={this.props.lowerAgeHandler} placeholder={`lower ${placeholderText}`} />
          </FormGroup>{' '}
          <FormGroup>
            <Input type="text" name="higherAge" id="higherAge"
              onChange={this.props.higherAgeHandler} placeholder={`higher ${placeholderText}`} />
          </FormGroup>{' '}
        </Form>
      </div>
    );
  }
}

export default AgeField
