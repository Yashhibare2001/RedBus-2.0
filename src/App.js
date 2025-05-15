import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Home from "./COMPONENTS/NAVBAR/Home";
import TravelsDetails from "./TravelsDetails";
import Signin from "./COMPONENTS/NAVBAR/Signin";
import Signup from "./COMPONENTS/NAVBAR/Signup";
// import Support from "./COMPONENTS/NAVBAR/Support";
import TravelsByCity from "./TravelsByCity";
import Travels from "./Travels";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<Travels/>} />
        <Route path="/travels/:id" element={<TravelsDetails />} />
        <Route path="/Logout" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route
            path="/getTravelsByCity/:city"
            element={<TravelsByCity/>}
          /> 
         {/* <Route path="/support" element={<Support/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
