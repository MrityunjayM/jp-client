import React from "react";
import axios from "axios";
import classes from "./AddBattle.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddBattle = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("balajee mishra ");
  };
  return (
    <div className={classes.battle}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name Of Battle</Form.Label>
          <Form.Control type="text" placeholder="Name of Battle" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price to enter</Form.Label>
          <Form.Control type="number" placeholder="Price to enter" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPlayer">
          <Form.Label>Number of player</Form.Label>
          <Form.Control type="number" placeholder="Number of player" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOrder">
          <Form.Label>order</Form.Label>
          <Form.Control type="number" placeholder="order" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddBattle;
