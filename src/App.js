import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {

  //Using useState to change the color of the navbar and buttons according to the mode selected by user
  const [mode, setMode] = useState("success");

  //Using useState to change the mode of the application
  const [modeText, setModeText] = useState("Light Mode");

  //Using useState to set the alerts dynamically based on its actions
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //function togglemode used to change according to the mode selected by user
  const toggleMode = () => {
    if (mode === "success") {
      setMode("dark");
      setModeText("Dark Mode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("success");
      setModeText("Light Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Text-Utils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter text below to analyze"
              showAlert={showAlert}
              mode={mode}
            />
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
