import React from 'react'
import { Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const SortField = props => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for="sortField">Sort By</Label>
    <Input type="select" name="sort" id="sortField"
      value={props.sortVal}
      onChange={props.sortHandler}>
      <option selected>Choose Sort Type</option>
      <option value='name'>Name</option>
      <option value='age'>Age</option>
      <option value='yearsActive'>Years Active</option>
    </Input>
  </div>
);

SortField.propTypes = {
  sortVal: PropTypes.string,
  sortHandler: PropTypes.func
}

export default SortField
