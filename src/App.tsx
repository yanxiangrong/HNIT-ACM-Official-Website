import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import ChildRoutes from "./routes/index"
import Navbar from "./componenta/Navbar";
import Footer from "./componenta/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <ChildRoutes/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
