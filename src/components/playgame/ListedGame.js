import React, { useEffect, useContext, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

import { battleContext } from "../context/battleContext"
import { spinnerContext } from "../context/spinnerContext"

import classes from "./Game.module.css"
import { authContext } from "../context/authContext"

const ListedGame = () => {
  const { fetchBattle, battleData, setBattleData } = useContext(battleContext)
  const { user, token } = useContext(authContext)
  const { setLoading, loading } = useContext(spinnerContext)
  const navigate = useNavigate()

  const fn = useCallback(async () => {
    const fetchedData = await fetchBattle()
    setBattleData(fetchedData.data)
  }, [fetchBattle])

  useEffect(() => {
    fn()
  }, [fn])

  const handlingPlayer = async (
    name,
    pricetoenter,
    numberofPlayers,
    waitingPlayer
  ) => {
    if (!token && !user) {
      navigate("/login")
      return 0
    }

    setLoading((prev) => (prev ? prev : !prev))
    let x = 0
    const timer = setInterval(async () => {
      const checkingwait = await axios.post("/api/playgame/waitingplayer", {
        name,
        pricetoenter,
        numberofPlayers,
        waitingPlayer,
      })
      console.log(loading, "bala")
      if ((checkingwait.status === 202 && checkingwait.data) || ++x === 45) {
        clearTimer(x, checkingwait)
      }
    }, 1000)

    const clearTimer = async (x, checkingwait) => {
      clearInterval(timer)
      setLoading(false)
      // this is for admin purpose...
      if (x === 45) {
        await axios.post("/api/playgame/giveittoadmin", {
          name,
          pricetoenter,
          numberofPlayers,
          waitingPlayer,
        })
        alert("command of this section will goes to adminnn")
      }

      if (checkingwait.data.user === "opponentuser") {
        navigate("/gameplayinput", {
          state: { data: checkingwait.data },
        })
      }

      if (checkingwait.data.user === "user") {
        navigate("/waitingforcode", {
          state: { data: checkingwait.data },
        })
      }
    }
  }
  // <Spinner />
  return (
    <div>
      {battleData.map((e, key) => (
        <Card className={classes.styled_card} key={key}>
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
                )
              }}
            >
              Play Game
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default ListedGame
