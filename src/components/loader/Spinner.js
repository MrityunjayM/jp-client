import { useContext } from "react";
import { spinnerContext } from "../context/spinnerContext";
import ClipLoader from "react-spinners/ClipLoader";
import "./spinner.css";

function Spinner() {
  const { loading } = useContext(spinnerContext);
  return (
    <div className="App">
      <ClipLoader loading={loading} size={50} />
    </div>
  );
}

export default Spinner;
