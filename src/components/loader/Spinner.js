import React, { useContext } from "react"
import { spinnerContext } from "../context/spinnerContext"
import ClipLoader from "react-spinners/ClipLoader"
import "./spinner.css"
import { Container } from "reactstrap"

function Spinner() {
  const { loading } = useContext(spinnerContext)

  return <>{loading && 
    <Container fluid className="d-grid py-3 bg-warning spinner-containers">
      <ClipLoader loading={loading} size={40} className="mx-auto" />
    </Container>
    }</>
}

export default Spinner
