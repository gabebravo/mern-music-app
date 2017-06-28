import React from 'react'
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap'

const NavLinks = props => (
  <Row style={{ marginTop: '1rem' }}>
    <Col xs="12" sm="12" md="12">
      <Nav>
        <NavItem>
          <NavLink href="#" onClick={props.handleUpdate}>Edit</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={props.handleDelete}>Delete</NavLink>
        </NavItem>
      </Nav>
    </Col>
  </Row>
);

export default NavLinks
