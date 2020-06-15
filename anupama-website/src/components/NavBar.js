import React from 'react'
import { Switch } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => {
    return (
        <Navbar bg="info" variant="light" expand="lg"fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Switch>
                    <React.Fragment>
                        
                          <NavLink className="d-block p-2 bg-info text-light" exact to="/">About</NavLink>
                          <NavLink className="d-block p-2 bg-info text-light" exact to="/portfolio">Portfolio</NavLink>
                          <NavLink className="d-block p-2 bg-info text-light" exact to="/resume">Resume</NavLink>
                        
                    </React.Fragment>
              

                  </Switch>
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
