import { useContext } from "react";
import { authContext } from "../context/authContext";
import ClipLoader from "react-spinners/ClipLoader";
import "./spinner.css";
function Spinner() {
  const { loading } = useContext(authContext);
  return (
    <div className="App">
      <ClipLoader loading={loading} size={50} />
    </div>
  );
}

export default Spinner;
