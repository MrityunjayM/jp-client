import React from "react";
// import FlashMessage from "react-flash-message";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
const Message = (props) => {
  // const opt =[
  //   "success",
  //   "danger",
  // ]
  let variant;
  console.log(props.success);
  props.success ? (variant = "success") : (variant = "danger");
  return (
    <>
      <Alert key={variant} variant={variant}>
        {props.message}
      </Alert>
    </>
  );
};

// render(Message, document.body);
export default Message;
