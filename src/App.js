import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#202124";
    }
  };

  return (
    <>
      <BrowserRouter>
        
        <Navbar title="textUtils" mode={darkMode} toggle={toggle} />
        <Routes>
          {/* exact helps to differentiatie between /home & /home/row  */}
        <Route exact path="/" >
          <Route index element={<TextForm mode={darkMode} />} />
          <Route exact path="about" element={<About />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
