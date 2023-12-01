import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text-Utils" />
      <div className="container my-3">
        <TextForm heading="Enter text below to analyze" />
      </div>
    </>
  );
}

export default App;
