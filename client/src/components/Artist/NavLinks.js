import React from 'react'
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap'

const NavLinks = () => (
  <Row style={{ marginTop: '1rem' }}>
    <Col xs="12" sm="12" md="12">
      <Nav>
        <NavItem>
          <NavLink href="">Back</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/edit">Edit</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/delete">Delete</NavLink>
        </NavItem>
      </Nav>
    </Col>
  </Row>
);

export default NavLinks
