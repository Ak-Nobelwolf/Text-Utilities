import React, {useState} from "react";

export default function TextForm(props) {
    const[text, setText] = useState();

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </>
  );
}
