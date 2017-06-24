import React from 'react'
import { Col } from 'reactstrap'

const styles = {
  padding: '1rem',
  textAlign: 'center'
}

const Result = () => (
  <Col xs="12" sm="7" md="7">
    <div style={styles}>
      <h3>No Records Found!</h3>
      <p>Try searching again</p>
    </div>
  </Col>
);

export default Result
