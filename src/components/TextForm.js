import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //Function to Convert to Upper Case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Function to Convert to Lower Case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //Function to Capitalize First Letter of each Sentence
  const capitalizeFirstLetterOfSentences = () => {
    let newText = text.replace(/\. *([a-z])/g, (match) => match.toUpperCase());
    setText(newText);
  };

  //Function to Capitalize First Letter of each Word
  const capitalizeFirstLetterOfWords = () => {
    let newText = text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(newText);
  };

  //Function to Remove Extra Spaces
  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };

  //Function to Reverse the text
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  //Function to Copy text to Clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };

  //Function to Convert to Clear the Text Area
  const handleClearClick = () => {
    setText("");
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

      <div className="container my-3">
        <div className="row">
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={capitalizeFirstLetterOfSentences}
          >
            Capitalize Sentences
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={capitalizeFirstLetterOfWords}
          >
            Capitalize Words
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleRemoveSpacesClick}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleReverseClick}
          >
            Reverse Text
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleCopyClick}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-primary col-md-2 mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Word Count = {text ? wordCount : 0} </p>
        <p>Character Count = {text ? charCount : 0}</p>
        <p> Time taken to read = {timeToRead} minutes </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
