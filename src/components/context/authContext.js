import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { spinnerContext } from "./spinnerContext";
import axios from "axios";
export const authContext = createContext();
const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const { loading, setLoading } = useContext(spinnerContext);
  const [user, setUser] = useState(null);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();

  

  //for spinner purpose.
  const SignOut = async () => {
    setLoading(true);
    const signout = await axios.get("/api/user/logout");
    if (signout.status == 200) {
      alert("you are signed out successfully");
      setUser(null);
      setLoading(false);
    }
    navigate("/login")
  };

  // for registeration
  const SignUp = async (phoneInput, passwordValue) => {
    setLoading(true);
    const dataTosubmit = await axios.post("/api/user/register", {
      phoneInput,
      passwordValue,
    });
    if (dataTosubmit.status == 200) {
      localStorage.setItem("authtoken", dataTosubmit.data.token);
      setUser(dataTosubmit.data);
      setLoading(false);
      alert("Thanks for sign up");
    }
    navigate("/listedgame")
  };
  // for login
  const SignIn = async (phoneInput, passwordValue) => {
    setLoading(true);
    // navigate("/home");
    const dataTosubmit = await axios.post("/api/user/login", {
      phoneInput,
      passwordValue,
    });
    if (dataTosubmit.status == 200) {
      localStorage.setItem("authtoken", dataTosubmit.data.token);
      setUser(dataTosubmit.data);
      setLoading(false);
      alert("You are logged in");
    }
    navigate("/listedgame")
  };
  // currentuser
  const getCurrentUser = () => localStorage.getItem("authtoken")

  return (
    <Provider
      value={{
        user,
        SignIn,
        SignOut,
        SignUp,
        loading,
        isRevealPwd,
        setIsRevealPwd,
        getCurrentUser,
      }}
    >
      {children}
    </Provider>
  );
};
