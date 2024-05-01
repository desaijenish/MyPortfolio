import React, { StrictMode } from "react";
import "./App.css";
import MyInfo from "./components/MyInfo";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <div
            className="context"
            style={{ zIndex: 1, width: "1250px", display: "flex" }}
          >
            <div
              style={{
                position: "fixed",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: "30%",
                zIndex: 1,
              }}
            >
              <MyInfo />
            </div>
            <div style={{ marginLeft: "30%", width: "60%" }}>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
            <div
              style={{
                position: "fixed",
                left: "87%",
                top: "25%",
                // transform: "translateY(-50%)",
                width: "30%",
                zIndex: 1,
              }}
            >
              <SideBar />
            </div>
          </div>
        </BrowserRouter>
      </StrictMode>

      <div
        className="area"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
