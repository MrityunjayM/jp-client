import React, { Fragment, useContext } from "react"
import { Badge, Card, CardHeader, Container } from "reactstrap"
import { authContext } from "../context/authContext"

const Profile = () => {
  const { user, token } = useContext(authContext)

  return token && user ? (
    <Container fluid className="py-2" style={{backgroundColor: "rgb(194 203 128)"}}>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="d-inline card-text m-0">{user.phoneNo}</h5>
          {token && user.admin && <Badge color="info" className="py-2">ADMIN</Badge>}
          <Badge className="py-2">${(15).toFixed(2)}</Badge>
        </CardHeader>
      </Card>
    </Container>
  ) : (
    <Fragment />
  )
}

export default Profile
