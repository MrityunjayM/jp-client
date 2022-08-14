import React, { useState, useEffect } from "react"
import axios from "axios"

const Payment = () => {
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")
  const [paytmParams, setPaytmParams] = useState({})

  useEffect(() => {
    console.log("Fetching params...")
    axios.post("/api/payment", { amount, email }).then(res => {
        if(res.status === 200) setPaytmParams(res.data)
    }).catch(console.table)
  }, [amount, email])

  const hiddenInputs = Object.keys(paytmParams).map((key, i) => (
    <input key={i} type="hidden" name={key} value={paytmParams[key]} />
  ))

  const startPayment = (e) => {}

  return (
    <div id="paymentFrm" className="container" style={{ marginTop: "20vh" }}>
      <form
        action="https://securegw-stage.paytm.in/order/process"
        method="POST"
        name="paytmForm"
      >
        <h1>Payment page</h1>
        {hiddenInputs}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={startPayment}
          type="submit"
          className="btn btn-primary btn-block mt-3"
        >
          Pay with PayTm
        </button>
      </form>
    </div>
  )
}

export default Payment
