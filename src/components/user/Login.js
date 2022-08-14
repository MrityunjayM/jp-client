import React, { useRef, useContext, Fragment } from "react"
import { authContext } from "../context/authContext"
import showPwdImg from "./show-password.svg"
import hidePwdImg from "./hide-password.svg"
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
import classes from "./SignUp.module.css"
import { Navigate } from "react-router-dom"

const LogIn = () => {
  const { SignIn, isRevealPwd, setIsRevealPwd, token } = useContext(authContext)
  const phoneInputRef = useRef()
  const password = useRef()

  async function submitHandler(event) {
    try {
      event.preventDefault()
      const phoneInput = phoneInputRef.current.value
      const passwordValue = password.current.value
      await SignIn(phoneInput, passwordValue)
    } catch (e) {
      alert(e)
    }
  }

  if (token) return <Navigate to={"/"} />

  return (
    <Fragment>
      {/* {token && <Navigate to="/" />} */}
      <form className={classes.form_one} onSubmit={submitHandler}>
        <div className={classes.form_control}>
          <input
            type="phone"
            required
            placeholder="Phone"
            maxLength={10}
            minLength={10}
            ref={phoneInputRef}
          />
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
          <button title="LogIn" type="submit" className={classes["btn-signup"]}>
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  )
}
export default LogIn
