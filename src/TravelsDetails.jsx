// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Travels.css";

// const TravelsDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [travel, setTravel] = useState(null);

//     // useEffect(() => {
//     //     axios.get(`https://server-1zkg.onrender.com/travels/${id}`)
//     //     // axios.get(`http://localhost:8040/travels/${id}`)
//     //     // axios.get(`http://SERVER_URL/travels/${id}`)
//     //         .then(response => setTravel(response.data.travel))
           
//     //         .catch(error => console.error("Error fetching travel details:", error));
//     // }, [id]);

//     useEffect(() => {
//     axios.get(`http://server-1zkg.onrender.com/travels/${id}`)
//         .then(response => {
//             console.log("API response:", response); // 👈 add this
//             setTravel(response.data.travel);
//         })
//         .catch(error => {
//             console.error("Error fetching travel details:", error);
//         });
// }, [id]);

//     if (!travel) return <p>Loading...</p>;

//     return (
//         <div className="container travel-details">
//             <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
//              {/* Travel Details Row */}
//              <div className="travel-row">
//                 {/* Left Side - Travel Image & Info */}
//                 <div className="travel-info">
//             <h1>{travel.name}</h1>
//             <img className="buses" src={travel.img} alt={travel.name} />
//             <p>💰 Price: ₹{travel.Price}</p>
//             <p>📍 Location: {travel.city}</p>
//             <p>⭐ Ratings: {travel.Ratings}</p>
//             <p>📅 Date: {travel.Date}</p>
//             <p>⏰ Time: {travel.time || "N/A"}</p>
//             <p>🪑 Available Seats: {travel.seats || "Not Available"}</p> 
//         </div>

//         {/* Right Side - Booking Section */}
//         <div className="booking-section">
//                     <h2>Book Your Ticket</h2>
//                     <form>
//                         <label>Name:</label>
//                         <input type="text" placeholder="Enter your name" required />

//                         <label>Email:</label>
//                         <input type="email" placeholder="Enter your email" required />

//                         <label>Seats:</label>
//                         <input type="number" placeholder="Number of seats" required />

//                         <button type="submit" className="book-button">Book Now</button>
//                     </form>
//                 </div>
//             </div>
//         </div>


//     );
// };

// export default TravelsDetails;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Travels.css";

const TravelsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [travel, setTravel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravelDetails = async () => {
      try {
        // Use your live API URL here:
        const response = await axios.get(`https://server-1zkg.onrender.com/travels/${id}`);

        console.log("API response:", response.data);

        // If your API returns an array or object, adapt accordingly:
        // Assuming response.data is the object directly
        const travelData = response.data.travel || response.data;

        setTravel(travelData);
      } catch (err) {
        console.error("Error fetching travel details:", err);
        setError("Failed to load travel details. Please try again later.");
      }
    };

    fetchTravelDetails();
  }, [id]);

  if (error) {
    return (
      <div className="container travel-details">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <p className="error">{error}</p>
      </div>
    );
  }

  if (!travel) {
    return (
      <div className="container travel-details">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <p className="loading">Loading travel details...</p>
      </div>
    );
  }

  return (
    <div className="container travel-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="travel-row">
        {/* Travel Info */}
        <div className="travel-info">
          <h1>{travel.name}</h1>
          <img className="buses" src={travel.img} alt={travel.name} />
          <p>💰 Price: ₹{travel.Price}</p>
          <p>📍 Location: {travel.city}</p>
          <p>⭐ Ratings: {travel.Ratings}</p>
          <p>📅 Date: {travel.Date}</p>
          <p>⏰ Time: {travel.time || "N/A"}</p>
          <p>🪑 Available Seats: {travel.seats || "Not Available"}</p>
        </div>

        {/* Booking Form */}
        <div className="booking-section">
          <h2>Book Your Ticket</h2>
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Seats:</label>
            <input type="number" placeholder="Number of seats" required min="1" max={travel.seats} />

            <button type="submit" className="book-button">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelsDetails;
