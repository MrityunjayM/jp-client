import React, { useRef } from "react"
import axios from "axios"
import classes from "./AddBattle.module.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useNavigate, Link } from "react-router-dom"

const AddBattle = () => {
  const nameInputRef = useRef()
  const priceInputRef = useRef()
  const defaultPlayerRef = useRef()
  const orderRef = useRef()
  const navigate = useNavigate()

  const submitHandler = async (event) => {
    event.preventDefault()
    const nameInput = nameInputRef.current.value
    const priceInput = priceInputRef.current.value
    const defaultInput = defaultPlayerRef.current.value
    const orderInput = orderRef.current.value
    const uploadData = await axios.post("/api/categoryofgame/add", {
      nameInput,
      priceInput,
      defaultInput,
      orderInput,
    })
    // now handle this as you wantt
    if (uploadData.status == 200) {
      navigate("/allbattle")
    }
  }

  return (
    <div className={classes.battle}>
      <Link to="/allbattle">Back to all Battle</Link>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name Of Battle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of Battle"
            ref={nameInputRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price to enter</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price to enter"
            ref={priceInputRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPlayer">
          <Form.Label>Number of player</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number of player"
            ref={defaultPlayerRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOrder">
          <Form.Label>order</Form.Label>
          <Form.Control type="number" placeholder="order" ref={orderRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddBattle
