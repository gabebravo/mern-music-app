import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const YearsField = props => (
  <div>
    <Label for="yearsActive">Years Active</Label>
    <Form inline style={{ marginBottom: '1rem' }}>
      <FormGroup style={{ marginRight: '3rem' }}>
        <Input type="text" name="lowerYears" id="lowerYears"
          onChange={props.lowerYearsHandler} placeholder="lower limit: 0-100" />
      </FormGroup>{' '}
      <FormGroup>
        <Input type="text" name="higherYears" id="higherYears"
          onChange={props.higherYearsHandler} placeholder="higher limit: 0-100" />
      </FormGroup>{' '}
    </Form>
  </div>
);

export default YearsField
