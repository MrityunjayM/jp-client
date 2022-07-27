import React, { useCallback, useContext, useEffect, useState } from "react"
import { battleContext } from "../context/battleContext"
import Table from "react-bootstrap/Table"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
const AllBattle = () => {
  const { fetchBattle, battleData, setBattleData } = useContext(battleContext)
  const navigate = useNavigate()

  const fn = useCallback(async () => {
    const battle = await fetchBattle()
    setBattleData(battle.data)
  }, [])

  useEffect(() => {
    fn()
  }, [fn])

  const deleteBattle = async (id) => {
    const deletedBattle = await axios.get(`/api/categoryofgame/delete/${id}`)
    // add here the flash message.
    // / delete karne ke bad ham same page pe aate hai o deleted dekhne ke liye humko refresh karn a hota hai.
    if (deletedBattle.status == 200) {
      fn()
    }
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>order</th>
          <th>Name of battle</th>
          <th>price to enter</th>
          <th>default player</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {battleData.map((e, i) => (
          <tr key={e._id} onClick={(e) => console.log("balajee mishra", e)}>
            <td>{e.order}</td>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td>{e.numberofPlayers}</td>
            <td>
              <Link
                style={{ margin: 10, display: "inline" }}
                to={`/edit/${e._id}`}
              >
                Edit
              </Link>
              <button
                className="d-inline"
                onClick={() => {
                  deleteBattle(e._id)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default AllBattle
