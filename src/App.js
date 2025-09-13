/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import React from "react";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
      <header style={{ 
        textAlign: "center", 
        padding: "20px", 
        fontSize: "24px", 
        fontWeight: "bold",
        backgroundColor: "#d4f7d4",   // light green background
        color: "#1a3d1a",             // dark green text for contrast
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <span role="img" aria-label="chat">💬</span> Real-Time Chat App
      </header>

      <Chat />
    </div>
  );
}

export default App;
*/

/*
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div>
        {/* Header */
       /* <header
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#d4f7d4", // light green background
            color: "#1a3d1a", // dark green text for contrast
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span role="img" aria-label="chat">
            💬
          </span>{" "}
          Real-Time Chat App
        </header>

        {/* Routes */
        /*<Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>

      
      
      
      <div>
        {/* Header */
       /* <header
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#d4f7d4",
            color: "#1a3d1a",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span role="img" aria-label="chat">
            💬
          </span>{" "}
          Real-Time Chat App
        </header>
       
    

        {/* Routes */
      /*  <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
       
      
      
    </Router>
  );
}

export default App;
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#8FBC8F", minHeight: "100vh" }}>
        {/* Header */}
        <header
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#d4f7d4",
            color: "#1a3d1a",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span role="img" aria-label="chat">
            💬
          </span>{" "}
          Real-Time Chat App
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />   {/* ✅ Add this */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
