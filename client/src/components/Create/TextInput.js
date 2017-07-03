import React from 'react'
import { Col, Label, Input  } from 'reactstrap'
import PropTypes from 'prop-types'

const TextInput = props => {
  return (
    <Col xs="12" sm="12" md="12" style={{ marginBottom: '1rem' }}>
      <Label for={props.field}>{props.title}</Label>
      <Input type="text" name={props.field} id={`${props.field}Field`}
        value={props.value}
        onChange={props.handlerFunc}
        placeholder={props.placeholder} />
    </Col>
  );
}

TextInput.propTypes = {
  field: PropTypes.string,
  title: PropTypes.string,
  handlerFunc: PropTypes.func,
  placeholder: PropTypes.string
}

export default TextInput
