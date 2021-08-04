import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import ChildRoutes from "./routes/index"

function App() {
  return (
    <div className="App">
      <Router>
        <ChildRoutes/>
      </Router>
    </div>
  );
}

export default App;
