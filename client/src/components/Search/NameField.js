import React from 'react'
import { Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const NameField = props => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for="name">Name</Label>
    <Input type="text" name="name" id="NameField"
      value={props.name}
      onChange={props.nameHandler}
      placeholder="enter musican name" />
  </div>
);

NameField.propTypes = {
  name: PropTypes.string,
  nameHandler: PropTypes.func
}

export default NameField
