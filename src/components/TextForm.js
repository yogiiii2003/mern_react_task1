import React from "react";
import { useState } from "react";
export default function TextForm() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  return (
    <div className="container my-3">
      <h1>Responsive Paragraph Word Counter </h1>
      <div className="mb-3 my-3">
        {/* <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="container my-3">
        <p>words count: {text.split(" ").length}</p>
      </div>
    </div>
  );
}
