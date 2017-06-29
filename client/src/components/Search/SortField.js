import React from 'react'
import { Label, Input } from 'reactstrap'

const SortField = props => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for="sortField">Sort By</Label>
    <Input type="select" name="sort" id="sortField"
      value={props.sortVal}
      onChange={props.sortHandler}>
      <option selected>Choose Sort Type</option>
      <option value='name'>Name</option>
      <option value='age'>Age</option>
      <option value='yearsActive'>Years</option>
    </Input>
  </div>
);

export default SortField
