import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { spinnerContext } from "./spinnerContext";
import axios from "axios";

export const authContext = createContext();
const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const { loading, setLoading } = useContext(spinnerContext);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const retrivedToken = localStorage.getItem("authtoken")
    const retrivedPhone = localStorage.getItem("authphone")
    if(retrivedToken) setToken(retrivedToken)
    if(retrivedPhone) setUser(retrivedPhone)
  }, [])  

  //for spinner purpose.
  const SignOut = async () => {
    console.log("Logging out...")
    setLoading(true);
    const signout = await axios.get("/api/user/logout");
    if (signout.status === 200) {
      localStorage.removeItem("authtoken")
      localStorage.removeItem("authphone")
      alert("you are signed out successfully");
      setToken(null);
      setUser(null);
    }
    setLoading(false);
    navigate("/login")
  };

  // for registeration
  const SignUp = async (phoneInput, passwordValue) => {
    setLoading(true);
    const dataTosubmit = await axios.post("/api/user/register", {
      phoneInput,
      passwordValue,
    });
    if (dataTosubmit.status === 200) {
      localStorage.setItem("authtoken", dataTosubmit.data.token);
      localStorage.setItem("authphone", dataTosubmit.data.phone);
      setToken(dataTosubmit.data.token);
      setUser(dataTosubmit.data.phone);
      alert("Thanks for sign up");
    }
    setLoading(false);
    navigate("/listedgame")
  };
  // for login
  const SignIn = async (phoneInput, passwordValue) => {
    setLoading(true);
    const dataTosubmit = await axios.post("/api/user/login", {
      phoneInput,
      passwordValue,
    });
    if (dataTosubmit.status === 200) {
      localStorage.setItem("authtoken", dataTosubmit.data.token);
      localStorage.setItem("authphone", dataTosubmit.data.phone);
      setToken(dataTosubmit.data.token);
      setUser(dataTosubmit.data.phone);
      alert("You are logged in");
    }
    setLoading(false);
    navigate("/listedgame")
  };
  

  return (
    <Provider
      value={{
        user,
        token,
        SignIn,
        SignOut,
        SignUp,
        loading,
        isRevealPwd,
        setIsRevealPwd,
      }}
    >
      {children}
    </Provider>
  );
};
