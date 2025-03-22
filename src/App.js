import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Home from "./COMPONENTS/NAVBAR/Home";

import Travels from "./Travels";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<Travels/>} />
        {/* <Route path="/support" element={<Support/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
