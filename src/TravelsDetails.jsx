import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Travels.css";

const TravelsDetails = () => {
    const { id } = useParams();
    const [travel, setTravel] = useState(null);

    useEffect(() => {
        axios.get(`https://server-1zkg.onrender.com/travels/${id}`)
            .then(response => setTravel(response.data))
            .catch(error => console.error("Error fetching travel details:", error));
    }, [id]);

    if (!travel) return <p>Loading...</p>;

    return (
        <div className="container travel-details">
            <h1>{travel.name}</h1>
            <img className="bus-img" src={travel.img} alt={travel.name} />
            <p>💰 Price: ₹{travel.Price}</p>
            <p>📍 Location: {travel.city}</p>
            <p>⭐ Ratings: {travel.Ratings}</p>
            {/* <p>📅 Date: {travel.Date}</p> */}
            <p>⏰ Time: {travel.time || "N/A"}</p>
        </div>
    );
};

export default TravelsDetails;
