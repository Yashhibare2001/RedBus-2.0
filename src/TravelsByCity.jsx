import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Travels.css";

const TravelsByCity = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        // axios.get("https://server-1zkg.onrender.com/travels")
        axios.get("http://SERVER_URL/travels")
            .then(response => {
                const uniqueCities = [...new Set(response.data.map((r) => r.city))];
                setCities(uniqueCities);
            })
            .catch(error => console.error("Error fetching cities:", error));
    }, []);

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);

        // axios.get(`https://server-1zkg.onrender.com/getTravelsByCity/${city}`)
        axios.get(`http://SERVER_URL/getTravelsByCity/${city}`)
            .then(response => setTravels(response.data))
            .catch(error => console.error("Error fetching travels:", error));
    };

    return (
        <div className="container">
            <h2>Travels by City</h2>
            <div className="dropdown-container">
                <label>Select a City: </label>
                <select onChange={handleCityChange} value={selectedCity}>
                    <option value="">-- Select --</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="bus-grid">
                {travels.length > 0 ? (
                    travels.map((travel) => (
                        <div key={travel.id} className="bus-card">
                            <img className="bus-img" src={travel.img} alt={travel.name} />
                            <div className="bus-info">
                                <h4>{travel.name}</h4>
                                <p>💰 Price: ₹{travel.Price}</p>
                                <p>📍 Location: {travel.city}</p>
                                <Link to={`/travels/${travel.id}`} className="details-btn">View Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Travels available for this city.</p>
                )}
            </div>
        </div>
    );
};

export default TravelsByCity;
