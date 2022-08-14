import React, { createContext, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { spinnerContext } from "./spinnerContext"
import axios from "axios"

export const authContext = createContext()
const { Provider } = authContext

export const AuthProvider = ({ children }) => {
  const { loading, setLoading } = useContext(spinnerContext)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const retrivedToken = localStorage.getItem("authtoken")
    const retrivedUser = JSON.parse(localStorage.getItem("authuser"))
    if (retrivedToken) setToken(retrivedToken)
    if (retrivedUser) setUser(retrivedUser)
  }, [])

  //for spinner purpose.
  const SignOut = async () => {
    console.log("Logging out...")
    setLoading(true)
    const signout = await axios.get("/api/user/logout")
    if (signout.status === 200) {
      localStorage.removeItem("authtoken")
      localStorage.removeItem("authuser")
      alert("you are signed out successfully")
      setToken(null)
      setUser(null)
    }
    setLoading(false)
    navigate("/login")
  }

  // for registeration
  const SignUp = async (phoneInput, passwordValue) => {
    setLoading(true)
    try {
      const dataTosubmit = await axios.post("/api/user/register", {
        phoneInput,
        passwordValue,
      })
      if (dataTosubmit.status === 200) {
        console.log(dataTosubmit)
        let { user } = dataTosubmit.data
        localStorage.setItem("authtoken", dataTosubmit.data.token)
        localStorage.setItem("authuser", JSON.stringify(user))
        setToken(dataTosubmit.data.token)
        setUser(user)
        alert("Thanks for sign up")
        navigate("/listedgame")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  // for login
  const SignIn = async (phoneInput, passwordValue) => {
    setLoading(true)
    try {
      const dataTosubmit = await axios.post("/api/user/login", {
        phoneInput,
        passwordValue,
      })
      if (dataTosubmit.status === 200) {
        console.log(dataTosubmit)
        let user = dataTosubmit.data.user
        localStorage.setItem("authtoken", dataTosubmit.data.token)
        localStorage.setItem("authuser", JSON.stringify(user))
        setToken(dataTosubmit.data.token)
        setUser(user)
        alert("You are logged in")
        navigate("/listedgame")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

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
  )
}
