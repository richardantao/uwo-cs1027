import React from "react";

import Logo from "../../atoms/Logo";

import { Nav, NavItem, NavLink } from "reactstrap"

import { } from "./Nav.module.scss";

export default () => {
    return (
        <Nav role="navigation" vertical>
            <Logo/>   
            <NavItem>
                <NavLink href="/notes">Course Notes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/samples">Sample Code</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/midterm">Midterm Exam</NavLink>
            </NavItem>
        </Nav>
    );  
};