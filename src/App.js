import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            🌤️ WeatherNow
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="home">
    <h1>Welcome to WeatherNow</h1>
    <p>Get real-time weather updates with detailed forecasts.</p>
  </div>
);

const About = () => (
  <div className="about">
    <h1>About WeatherNow</h1>
    <p>WeatherNow is a simple and user-friendly app for checking real-time weather.</p>
  </div>
);

export default App;
