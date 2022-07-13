import React, { useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { battleContext } from "../context/battleContext";
import { spinnerContext } from "../context/spinnerContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListedGame = () => {
  const { fetchBattle, battleData, setBattleData } = useContext(battleContext);
  const { setLoading } = useContext(spinnerContext);
  const navigate = useNavigate();

  useEffect(() => {
    fn();
  }, []);

  const fn = async () => {
    const fetchedData = await fetchBattle();
    setBattleData(fetchedData.data);
  };

  const handlingPlayer = async (
    name,
    pricetoenter,
    numberofPlayers,
    waitingPlayer
  ) => {
    setLoading(true);
    const timer = setInterval(async () => {
      const checkingwait = await axios.post("/api/playgame/waitingplayer", {
        name,
        pricetoenter,
        numberofPlayers,
        waitingPlayer,
      });
      console.log("balajee");
      if (checkingwait.status == 202 && checkingwait.data) {
        clearTimer();
        console.log(checkingwait);
      }
    }, 1000);

    const clearTimer = () => {
      clearInterval(timer);
    };
    setLoading(false);
    // navigate("/gameplayinput", {
    //   state: {
    //     name,
    //     pricetoenter,
    //     numberofPlayers,
    //     waitingPlayer,
    //   },
    // });
  };
  // <Spinner />
  return (
    <div>
      {battleData.map((e) => (
        <Card>
          <CardBody>
            <CardTitle tag="h5">{e.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {e.pricetoenter}
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button
              onClick={() => {
                handlingPlayer(
                  e.name,
                  e.pricetoenter,
                  e.numberofPlayers,
                  e.waitingPlayer
                );
              }}
            >
              Play Game
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default ListedGame;
