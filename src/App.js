
import "./app.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import NavBar from "./components/topbar/NavBar";



function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     </BrowserRouter>
 
  );
}

export default App;
