import React from "react";

export default function About(props) {
  // Setting background color for the text area based on props
  const textColor = {
    backgroundColor: props.mode === "success" ? "white" : "grey",
    color: props.mode === "success" ? "black" : "white",
  };

  return (
    <div className="container" style={textColor}>
      <header className="text-center mb-4">
        <h1>About Us</h1>
      </header>

      <section className="mb-4">
        <div className="container row justify-content-center">
          <div className="col-md-8 ">
            <h2 className="text-center mb-3">Text Utilities</h2>
            <p className="text-justify">
              Welcome to the Text Utilities Website. Our web application is
              designed to enhance and analyze text with a variety of useful
              tools. Whether you need to convert case, capitalize sentences or
              words, remove extra spaces, or perform other text manipulations,
              Text Utilities has got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-3">Features</h2>
            <div className="mb-3">
              <h3>Text Transformation:</h3>
              <ul className="list-group">
                <li className="list-group-item">Convert to Upper Case</li>
                <li className="list-group-item">Convert to Lower Case</li>
                <li className="list-group-item">
                  Capitalize First Letter of Each Sentence
                </li>
                <li className="list-group-item">
                  Capitalize First Letter of Each Word
                </li>
                <li className="list-group-item">Remove Extra Spaces</li>
                <li className="list-group-item">Reverse Text</li>
                <li className="list-group-item">Paste Text</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3>Text Analysis:</h3>
              <ul className="list-group">
                <li className="list-group-item">Word Count</li>
                <li className="list-group-item">Character Count</li>
                <li className="list-group-item">Reading Time Estimate</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3>Text Manipulation:</h3>
              <ul className="list-group">
                <li className="list-group-item">Copy to Clipboard</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3>User Interaction:</h3>
              <ul className="list-group">
                <li className="list-group-item">Clear Text Area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-3">Usage</h2>
            <ol className="list-group">
              <li className="list-group-item">
                Enter or paste your text in the provided textarea.
              </li>
              <li className="list-group-item">
                Explore the various transformation and analysis options.
              </li>
              <li className="list-group-item">
                Copy the transformed text or analyze the text statistics.
              </li>
              <li className="list-group-item">
                Enjoy a responsive and user-friendly experience!
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
