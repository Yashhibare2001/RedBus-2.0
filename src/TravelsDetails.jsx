import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Travels.css";

const TravelsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [travel, setTravel] = useState(null);

    useEffect(() => {
        axios.get(`https://server-1zkg.onrender.com/travels/${id}`)
        // axios.get(`http://SERVER_URL/travels/${id}`)
            .then(response => setTravel(response.data.travels))
            .catch(error => console.error("Error fetching travel details:", error));
    }, [id]);

    if (!travel) return <p>Loading...</p>;

    return (
        <div className="container travel-details">
            <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>
             {/* Travel Details Row */}
             <div className="travel-row">
                {/* Left Side - Travel Image & Info */}
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

        {/* Right Side - Booking Section */}
        <div className="booking-section">
                    <h2>Book Your Ticket</h2>
                    <form>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter your name" required />

                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" required />

                        <label>Seats:</label>
                        <input type="number" placeholder="Number of seats" required />

                        <button type="submit" className="book-button">Book Now</button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default TravelsDetails;
