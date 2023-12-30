import React, { useState } from "react";

export default function TextForm(props) {
  //Using state management for various text functionalities
  const [text, setText] = useState("");

  //Function to Convert to Upper Case
  const handleUpercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Upper Case!", "success");
  };

  //Function to Convert to Lower Case
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lower Case!", "success");
  };

  // Function to Capitalize First Letter of each Sentence
  const capitalizeFirstLetterOfSentences = () => {
    let newText = text.replace(
      /(^|[.!?]) *([a-z])/g,
      (match, previous, current) => {
        return previous + " " + current.toUpperCase();
      }
    );
    setText(newText);
    props.showAlert("First Letter of Each Sentence is Capitalized!", "success");
  };

  //Function to Capitalize First Letter of each Word
  const capitalizeFirstLetterOfWords = () => {
    let newText = text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(newText);
    props.showAlert("First Letter of Each Word is Capitalized!", "success");
  };

  //Function to Remove Extra Spaces
  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Removed Extra Spaces!", "success");
  };

  //Function to Reverse the text
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text is Reversed!", "success");
  };

  //Function to Copy text to Clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to Clipboard!", "success");
  };

  // Function to Paste text from Clipboard
  const handlePasteClick = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      props.showAlert("Text is pasted in the box!", "success");
    } catch (error) {
      console.error("Unable to paste text from clipboard:", error);
    }
  };

  //Function to Convert to Clear the Text Area
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let wordCount = text.split(/\s+/).filter((element)=>{return element.length !== 0}).length;
  let charCount = text.length;
  let timeToRead = (0.008 * wordCount).toFixed(2);

  //Setting background color for the text area based on props
  const textAreaBackground = {
    backgroundColor: props.mode === "success" ? "white" : "#d5d1d1",
    color: props.mode === "success" ? "black" : "black",
  };

  //Setting background color for the container based on props
  const containerBackground = {
    color: props.mode === "success" ? "black" : "white",
  };

  return (
    <>
      <div className="container" style={containerBackground}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-black"
            id="myBox"
            rows="8"
            placeholder="Enter your Text here..."
            value={text}
            onChange={handleOnChange}
            style={textAreaBackground}
          ></textarea>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleUpercase}
            disabled = {text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleLowercase}
            disabled = {text.length === 0}
          >
            Convert to LowerCase
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={capitalizeFirstLetterOfSentences}
            disabled = {text.length === 0}
          >
            Capitalize Sentences
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={capitalizeFirstLetterOfWords}
            disabled = {text.length === 0}
          >
            Capitalize Words
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleRemoveSpacesClick}
            disabled = {text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleReverseClick}
            disabled = {text.length === 0}
          >
            Reverse Text
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleCopyClick}
            disabled = {text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handlePasteClick}
          >
            Paste Text
          </button>

          <button
            className={`btn btn-${props.mode} col-md-2 mx-2 my-1`}
            onClick={handleClearClick}
            disabled = {text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-3" style={containerBackground}>
        <h2>Your Text Summary</h2>
        <p>Word Count = {text ? wordCount : 0} </p>
        <p>Character Count = {text ? charCount : 0}</p>
        <p> Time taken to read = {timeToRead} minutes </p>
        <h2>Preview</h2>
        <p>
          {charCount > 0
            ? text
            : "Nothing to Preview here!"}
        </p>
      </div>
    </>
  );
}
