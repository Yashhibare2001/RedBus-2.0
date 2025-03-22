// import React, { useEffect, useState } from "react";
// import Booking from "./Booking";
// import "./Main.css";
// import axios from "axios";

// const Details = () => {
//     const [travelsList, setTravelsList] = useState([]);

//     useEffect(() => {
//         axios.get("https://server-1zkg.onrender.com/travels") // Update with actual backend API
//             .then(response => setTravelsList(response.data))
//             .catch(error => console.error("Error fetching travel data:", error));
//     }, []);

//     return (
//         <div>
//             <Booking buslist={travelsList} />
//         </div>
//     );
// };

// export default Details;
