import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../context/authContext"
const MainNavigation = () => {
  const { SignOut } = useContext(authContext)
  return (
    <header className="container-fluid mb-3 bg-success py-3">
      <nav className="container">
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="signup"
        >
          Sign-up
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="login"
        >
          LogIn
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="login"
          onClick={SignOut}
        >
          Logout
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="addbattle"
        >
          AddBattle
        </Link>
        <Link style={{ display: "none" }} to="allbattle">
          AllBattle
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="givecointouser"
        >
          GiveCoinToUser
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="listedgame"
        >
          ListedGame
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="imageuploader"
        >
          Upload the image
        </Link>
        <Link
          style={{
            margin: "10px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
          }}
          to="superadmin"
        >
          superAdmin
        </Link>
      </nav>
    </header>
  )
}

export default MainNavigation
