import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Table } from "reactstrap";
const Coinofuser = () => {
  const location = useLocation();
  const { phoneNo } = location.state;
  const [userDetail, setUserDetail] = useState([]);
  
  useEffect(() => {
    coinUpdating();
  }, []);
  
  const coinUpdating = async () => {
    const coinupdateforuser = await axios.post("/api/cointouser/all", {
      phoneNo,
    });
    setUserDetail(coinupdateforuser.data);
  };

  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Mobile Number</th>
          <th>Coin</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userDetail.map((e, i) =>
          !i ? (
            <tr style={{ color: "red" }}>
              <th scope="row">{i + 1}</th>
              <td>{e.user.phoneNo}</td>
              <td>{e.amount}</td>
              <td>{e.date}</td>
              <td></td>
            </tr>
          ) : (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{e.user.phoneNo}</td>
              <td>{e.amount}</td>
              <td>{e.date}</td>
              <td></td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default Coinofuser;
