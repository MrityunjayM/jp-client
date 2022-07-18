import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { spinnerContext } from "./spinnerContext";
import axios from "axios";
export const authContext = createContext();
const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  // const [authToken, setAuthToken] = useState(null);
  const { loading, setLoading } = useContext(spinnerContext);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();
  //for spinner purpose.
  let [user_log, setUserLog] = useState(null);
  const SignOut = async () => {
    // sessionStorage.removeItem("Auth Token");
  };

  // for registeration
  const SignUp = async (phoneInput, passwordValue) => {
    setLoading(true);
    const dataTosubmit = await axios.post("/api/user/register", {
      phoneInput,
      passwordValue,
    });
    if (dataTosubmit.status == 200) {
      setLoading(false);
      alert("Thanks for sign up");
    }
    // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
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
      setUserLog(dataTosubmit.data.user_log);
      setLoading(false);
      alert("You are logged in");
    }
  };

  return (
    <Provider
      value={{ SignIn, SignOut, SignUp, loading, isRevealPwd, setIsRevealPwd }}
    >
      {children}
    </Provider>
  );
};
