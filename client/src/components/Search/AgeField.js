import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const AgeField = props => (
  <div>
    <Label for="ageRange">Age Range</Label>
    <Form inline style={{ marginBottom: '1rem' }}>
      <FormGroup style={{ marginRight: '3rem' }}>
        <Input type="text" name="lowerAge" id="lowerAge"
          onChange={props.lowerAgeHandler} placeholder="lower limit: 0-100" />
      </FormGroup>{' '}
      <FormGroup>
        <Input type="text" name="higherAge" id="higherAge"
          onChange={props.higherAgeHandler} placeholder="higher limit: 0-100" />
      </FormGroup>{' '}
    </Form>
  </div>
);

export default AgeField
