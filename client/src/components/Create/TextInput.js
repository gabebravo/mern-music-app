import React from 'react'
import { Col, Label, Input  } from 'reactstrap'

const TextInput = props => (
  <Col xs="12" sm="12" md="12" style={{ marginBottom: '1rem' }}>
    <Label for={props.field}>{props.title}</Label>
    <Input type="text" name={props.field} id={`${props.field}Field`}
      value={props.value}
      onChange={props.handlerFunc}
      placeholder={props.placeholder} />
  </Col>
);

export default TextInput
