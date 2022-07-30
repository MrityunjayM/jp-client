import React, { Fragment, useCallback, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"

import { authContext } from "../context/authContext"
import {
  Navbar,
  Nav,
  NavItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Badge,
} from "reactstrap"
import classes from "./MainNavigation.module.css"

import routes from "./routes"

const MainNavigation = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { SignOut, user, token } = useContext(authContext)

  const handleLogout = useCallback(() => {
    SignOut()
    setCollapsed(false)
    return 0
  }, [])

  const navigationRoutes = routes.map(({ route, text }, index) => {
    if (token && (route === "/signup" || route === "/login")) return <Fragment key={index}/>
    if (!token && route === "/logout") return <Fragment key={index}/>
    if (token && route === "/logout") {
      return (
        <NavItem key={index}>
          <NavLink to="#logout" className="nav-link" onClick={handleLogout}>
            {text}
          </NavLink>
        </NavItem>
      )
    }

    return (
      <NavItem key={index}>
        <NavLink
          to={route}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setCollapsed(!true)}
        >
          {text}
        </NavLink>
      </NavItem>
    )
  })
  return (
    <div className={classes.navigation}>
      <Navbar color="faded" light>
        <NavLink to="/" className="me-auto navbar-brand">
          Mahi Ludo
        </NavLink>

        <div>
          <Button
          title="Menu"
            color="light"
            className={classes["btn-menu"]}
            id={classes["btn-transparent"]}
            onClick={() => setCollapsed(true)}
          >
            <FaBars />
          </Button>
          <Offcanvas
            direction={"start"}
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
              {user && (
                <Badge color="primary" className="ms-3">
                  {user}
                </Badge>
              )}
              <Nav className="flex-column">{navigationRoutes}</Nav>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </Navbar>
    </div>
  )
}

export default React.memo(MainNavigation)
