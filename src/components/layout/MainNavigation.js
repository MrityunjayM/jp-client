import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../context/authContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  const { SignOut, getCurrentUser } = useContext(authContext);
  const [collapsed, setCollapsed] = useState(true);
  const [currentUser, setCurrentUser] = useState(undefined);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className={classes.navigation}>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Mahi Ludo
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {!currentUser && (
              <>
                <NavItem>
                  <NavLink href="/signup">Sign-up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">LogIn</NavLink>
                </NavItem>
              </>
            )}
            <NavItem>
              <NavLink onClick={SignOut}>Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addbattle">Add Battle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/allbattle">All Battle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/givecointouser">Give coin to user</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/listedgame">Listed Game</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/imageuploader">upload the image</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/superadmin">super admin</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default MainNavigation;
