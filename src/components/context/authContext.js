import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const authContext = createContext();
const { Provider } = authContext;
export const AuthProvider = ({ children }) => {
  // const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();
  //for spinner purpose.
  let [loading, setLoading] = useState(false);
  let [user_log, setUserLog] = useState(null);

  useEffect(() => {}, []);

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
    console.log(dataTosubmit);
    if (dataTosubmit.status == 200) {
      setUserLog(dataTosubmit.data.user_log);
      setLoading(false);
    }
  };

  return (
    <Provider value={{ SignIn, SignOut, SignUp, loading }}>{children}</Provider>
  );
};
