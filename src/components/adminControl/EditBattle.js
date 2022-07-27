import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import classes from "./AddBattle.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { spinnerContext } from "../context/spinnerContext";

const EditBattle = () => {
  const { setLoading } = useContext(spinnerContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [defaultCount, setCount] = useState("");
  const [order, setOrder] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getDataFirst();
  }, []);

  const getDataFirst = async () => {
    const getBattleById = await axios.get(
      `/api/categoryofgame/edit/${params.id}`
    );
    setName(getBattleById.data.name);
    setPrice(getBattleById.data.pricetoenter);
    setCount(getBattleById.data.numberofPlayers);
    setOrder(getBattleById.data.order);
  };
  
  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    const updateBattle = await axios.put(
      `/api/categoryofgame/edit/${params.id}`,
      {
        name: name,
        pricetoenter: price,
        numberofPlayers: defaultCount,
        order: order,
      }
    );
    setLoading(false);
    if (updateBattle.status === 200) {
      navigate("/allbattle");
    }
  };

  return (
    <div className={classes.battle}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name Of Battle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of Battle"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price to enter</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price to enter"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPlayer">
          <Form.Label>Number of player</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number of player"
            value={defaultCount}
            onChange={(e) => setCount(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOrder">
          <Form.Label>order</Form.Label>
          <Form.Control
            type="number"
            placeholder="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditBattle;
