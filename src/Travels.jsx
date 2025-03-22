import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Travels.css";

const Travels = () => {
    const [travels, setTravels] = useState([]);
    const [filteredTravels, setFilteredTravels] = useState([]);
    const [busType, setBusType] = useState("");

    // Fetch Bus Data
    useEffect(() => {
        axios.get("https://server-1zkg.onrender.com/travels")
            .then(response => {
                setTravels(response.data);
                setFilteredTravels(response.data);
            })
            .catch(error => console.error("Error fetching bus data:", error));
    }, []);

    // Handle Bus Type Filtering
    const handleFilterChange = (event) => {
        const type = event.target.value;
        setBusType(type);

        if (type === "") {
            setFilteredTravels(travels);
        } else {
            const filtered = travels.filter(bus => bus.type === type);
            setFilteredTravels(filtered);
        }
    };

    return (
        <div className="container">
            <h2 className="section-title">Available Buses</h2>

            {/* Dropdown for Filtering */}
            <div className="dropdown-container">
                <label>Filter by Bus Type:</label>
                <select onChange={handleFilterChange} value={busType}>
                    <option value="">All</option>
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                    <option value="Government">Government</option>
                </select>
            </div>

            {/* Bus Listings in Grid */}
            <div className="bus-grid">
                {filteredTravels.length > 0 ? (
                    filteredTravels.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <img className="bus-img" src={bus.img} alt={bus.name} />
                            <div className="bus-info">
                                <h4>{bus.name}</h4>
                                <p>💰 Price: ₹{bus.Price}</p>
                                <p>📍 Location: {bus.city}</p>
                                <p>⭐ Ratings: {bus.Ratings}</p>
                                {/* <p>📅 Date: {bus.Date}</p> */}
                                <Link to={`/travels/${bus.id}`} className="details-btn">View Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No buses available.</p>
                )}
            </div>
        </div>
    );
};

export default Travels;
