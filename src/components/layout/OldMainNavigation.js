import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/authContext";
const MainNavigation = () => {
  const { SignOut } = useContext(authContext);
  return (
    <>
      <div>
        <Link style={{ margin: 10 }} to="signup">
          Sign-up
        </Link>
        <Link style={{ margin: 10 }} to="login">
          LogIn
        </Link>
        <Link style={{ margin: 10 }} to="login" onClick={SignOut}>
          Logout
        </Link>
        <Link style={{ margin: 10 }} to="addbattle">
          AddBattle
        </Link>
        <Link style={{ display: "none" }} to="allbattle">
          AllBattle
        </Link>
        <Link style={{ margin: 10 }} to="givecointouser">
          GiveCoinToUser
        </Link>
        <Link style={{ margin: 10 }} to="listedgame">
          ListedGame
        </Link>
        <Link style={{ margin: 10 }} to="imageuploader">
          Upload the image
        </Link>
        <Link style={{ margin: 10 }} to="superadmin">
          superAdmin
        </Link>
      </div>
    </>
  );
};

export default MainNavigation;
