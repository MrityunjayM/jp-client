import { Navigate } from "react-router-dom"
import React, { useRef, useContext } from "react"

import { authContext } from "../context/authContext"
import classes from "./SignUp.module.css"

import showPwdImg from "./show-password.svg"
import hidePwdImg from "./hide-password.svg"

function SignUp() {
  const { SignUp, isRevealPwd, setIsRevealPwd, token } = useContext(authContext)
  const phoneInputRef = useRef()
  const password = useRef()

  async function submitHandler(event) {
    try {
      event.preventDefault()
      const phoneInput = phoneInputRef.current.value
      const passwordValue = password.current.value
      await SignUp(phoneInput, passwordValue)
    } catch (e) {
      alert(e)
    }
  }

  if (token) return <Navigate to={"/"} />
  return (
    <form className={classes.form_one} onSubmit={submitHandler}>
      <div className={classes.form_control}>
        <input 
        type="phone" 
        required 
        placeholder="Phone"
        minLength={10} 
        maxLength={10} 
        ref={phoneInputRef} />
      </div>
      <div className={classes.pwd_container}>
        <input
          type={isRevealPwd ? "text" : "password"}
          required
          placeholder="Password"
          autoComplete="off"
          ref={password}
        />
        <img
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd((prevState) => !prevState)}
          alt={isRevealPwd ? "Hide Password" : "Show Password"}
        />
      </div>
      <div style={{ padding: 0 }}>
        <button title="SignUp" type="submit" className={classes["btn-signup"]}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default SignUp
