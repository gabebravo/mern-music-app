import React from 'react'
import { Label, Input } from 'reactstrap'

const SortField = props => (
  <div style={{ marginBottom: '1rem' }}>
    <Label for="sortField">Sort By</Label>
    <Input type="select" name="sort" id="sortField"
      value={props.sortVal}
      onChange={props.sortHandler}>
      <option selected>Name</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  </div>
);

export default SortField
