import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

import { authContext } from "../context/authContext";
import {
  Navbar,
  Nav,
  NavItem,
  Offcanvas, OffcanvasHeader, OffcanvasBody, Button
} from "reactstrap";
import classes from "./MainNavigation.module.css";

import routes from './routes'

const MainNavigation = () => {
  const { SignOut, getCurrentUser, user: userInfo } = useContext(authContext);
  const [collapsed, setCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = getCurrentUser();
    if (token) {
      setCurrentUser(token);
    }
  }, []);

  const navigationRoutes = routes.map(({route, text}, index) => { 
    if(currentUser && (route === '/signup' || route === '/login')) return
    if(!currentUser && (route === '/logout')) return
    if(currentUser && (route === '/logout')) {
      return <NavItem key={index}>
      <NavLink 
        to={route} 
        className={({isActive}) => isActive? "nav-link active":"nav-link"} 
        onClick={() => {setCollapsed(!true); SignOut()}}>
        {text}
      </NavLink>
    </NavItem>
    }

    return (<NavItem key={index}>
      <NavLink 
        to={route} 
        className={({isActive})=> isActive? "nav-link active":"nav-link"} 
        onClick={() => setCollapsed(!true)}>{text}</NavLink>
    </NavItem>)
  })
  console.log(userInfo);
  return (
    <div className={classes.navigation}>
      <Navbar color="faded" light>
        <NavLink to="/" className="me-auto navbar-brand">
          Mahi Ludo
        </NavLink>

        <div>
          <Button 
            color="light" 
            className={classes["btn-menu"]} 
            id={classes["btn-transparent"]} 
            onClick={() => setCollapsed(true)}
          >
            <FaBars />
          </Button>
          <Offcanvas
            direction="start"
            fade={true}
            scrollable
            isOpen={collapsed}
            unmountOnClose={true}
            toggle={() => setCollapsed(false)}
          >
            <OffcanvasHeader toggle={() => setCollapsed(!true)}>
              Mahi Ludo
            </OffcanvasHeader>
            <OffcanvasBody>
            <Nav className="flex-column">{navigationRoutes}</Nav>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </Navbar>
    </div>
  );
};


export default MainNavigation;
