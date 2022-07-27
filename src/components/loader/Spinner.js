import { useContext } from "react"
import { spinnerContext } from "../context/spinnerContext"
import ClipLoader from "react-spinners/ClipLoader"
import "./spinner.css"

function Spinner() {
  const { loading } = useContext(spinnerContext)

  return <>{loading && <ClipLoader loading={loading} size={40} />}</>
}

export default Spinner
