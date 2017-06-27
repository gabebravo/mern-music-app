import React from 'react'
import { Label, Input } from 'reactstrap'

const NameField = props => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for="name">Name</Label>
    <Input type="text" name="name" id="NameField"
      value={props.name}
      onChange={props.nameHandler}
      placeholder="enter musican name" />
  </div>
);

export default NameField
