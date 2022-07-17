import React, { useState, useContext } from "react";
import axios from "axios";
import { spinnerContext } from "../context/spinnerContext";

function ImageUploader() {
  const [image, setImage] = useState("");
  const { setLoading } = useContext(spinnerContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("gameimg", image);
    const imageresult = await axios.post(
      "/api/playgame/imageuploader",
      formData
    );
    if (imageresult.status == 202) {
      setLoading(false);
      alert("matched");
    }
    if (imageresult.status != 202) {
      setLoading(false);
      alert("not matched");
    }
  };

  return (
    <div className="text-center mt-5">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="form-group">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
export default ImageUploader;
