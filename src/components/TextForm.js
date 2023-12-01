import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let wordCount = text.split(" ").length;
  let charCount = text.length;
  let timeToRead = 0.008 * charCount;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter your Text here..."
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to UpperCase
      </button>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Word Count = {text ? wordCount : 0} </p>
        <p>Character Count = {text ? charCount : 0}</p>
        <p> {timeToRead} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
