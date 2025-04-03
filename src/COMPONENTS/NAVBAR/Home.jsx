import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaSearch } from "react-icons/fa"; // Search Icon
import "./Home.css";


// Importing images
import pune from './assest/pune.webp';
import hyd from './assest/hydrabad.jpeg';
import nag from './assest/nsgpur.jpg';
import train from './assest/train.webp';
import barcode from './assest/barcode.jpg';
import TravelsByCity from "../../TravelsByCity";

const Home = () => {
    // const [locations, setLocations] = useState([]);
    // // Fetch Locations from Backend
    // useEffect(() => {
    //    // axios.get("http://localhost:5000/api/locations") // Update with your backend API
    //     // axios.get("https://server-1zkg.onrender.com/api/locations") // For production
    //         .then(response => setLocations(response.data))
    //         .catch(error => console.error("Error fetching locations:", error));
    // }, []);

    // const HeroSection = ({ handleSearch }) => {
    //     const [searchCity, setSearchCity] = useState("");
    //     const [selectedCity, setSelectedCity] = useState("");

    //     const handleCityChange = (city) => {
    //         setSelectedCity(city);
    //         setSearchCity(city); // Sync selected city with search input

    //     };


    const [searchCity, setSearchCity] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [restaurants, setTravels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
  
    const handleSearch = async (e) => {
      e.preventDefault();
  
      if (!searchCity && !selectedCity) {
        setError("Please select or enter a city");
        return;
      }
  
      setLoading(true);
      setError(null);
      const city = searchCity || selectedCity; // Use either the entered city or selected city
  
      try {
        // const response = await axios.get(`http://localhost:5400/getRestaurantsByCity/${city}`);
        const response = await axios.get(`http://server-1zkg.onrender.com/getRestaurantsByCity/${city}`);
        console.log("response-->>>>",response);
        setTravels(response.data); // Assuming the response contains the list of restaurants
        // Navigate to the results page with the city as a query parameter
        navigate(`/travels/city/${city}`);
      } catch (err) {
        setError("Failed to fetch travels.");
      } finally {
        setLoading(false);
      }
    };


    return (
        <div>
            {/* Main Content */}
            <div id="div-bg">
                <div className="upperdiv">
                    <h1>India's No. 1 Online Bus Ticket Booking Site</h1>

                    {/* Search Bar with Icon */}
                    <form className="d-flex onerow" role="search">
                        <input className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        />

                        <button className="btn btn-outline-success" 
                        id="butn" type="submit">
                            <FaSearch /> {/* Search Icon */}
                        </button>
                    </form>

                   
                    {/* Offers Section */}
                    <div className="offerdiv">
                        <h2>EXCLUSIVE OFFERS</h2>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="offers-carousel"
                        >
                            <SwiperSlide>
                                <div className="offer-card">
                                    {/* <img src={offer1} alt="Offer 1" /> */}
                                    <h3>Special Discount 20% OFF</h3>
                                    <p>Get 20% off on next ride. Limited time offer!</p>
                                    <a href="/offers/offer1" className="check-offer-btn">Check Offer</a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="offer-card">
                                    {/* <img src={offer2} alt="Offer 2" /> */}
                                    <h3>Flat ₹100 Cashback</h3>
                                    <p>Book now and get ₹100 cashback instantly.</p>
                                    <a href="/offers/offer2" className="check-offer-btn">Check Offer</a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="offer-card">
                                    {/* <img src={offer3} alt="Offer 3" /> */}
                                    <h3>Buy 1 Get 1 Free</h3>
                                    <p>Limited-time deal on selected bus routes.</p>
                                    <a href="/offers/offer3" className="check-offer-btn">Check Offer</a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

                {/* Location Dropdown */}
                {/* <section className="search-section">
                    <h2>Find Your Bus</h2>
                    <select
                        className="dropdown"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        <option value="">Select a Location</option>
                        {locations.map((location) => (
                            <option key={location.id} value={location.name}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                    <Link to={`/buses/${selectedLocation}`} className="search-btn">
                        Search Buses
                    </Link>
                </section> */}

                {/* Travel Section */}
                <div className="goverment">
                    <div className="uppersection">
                        <h1>Try your travels !!</h1>
                        <form action="/booking">
                            <button id="Click">VIEW</button>
                        </form>
                    </div>

                    <div className="middlepart">
                        <div className="middlesection">
                            <img src={pune} alt="Pune" className="src1" />
                            <h1>Vintage Thrown</h1>
                            <div>
                            <form action="/booking"> 
                                <button>BOOK</button>
                                </form>
                            </div>
                        </div>

                        <div className="middlesection">
                            <img src={hyd} alt="Hyderabad" className="src1" />
                            <h1>Mustang Tours</h1>
                            <div>
                            <form action="/booking"> 
                                <button>BOOK</button>
                                </form>
                            </div>
                        </div>

                        <div className="middlesection">
                            <img src={nag} alt="Nagpur" className="src1" />
                            <h1>Rolls on Wheels</h1>
                            <div>
                            <form action="/booking"> 
                                <button>BOOK</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Travel Options */}
                <div className="upperbirth">
                    <h1>NOW, GET <b>MORE THAN <br />JUST BUS </b>TICKETS WITH <br />REDBUS!</h1>
                    <div className="rail">
                        <img src={train} alt="Train Service" />
                    </div>
                </div>

                {/* Mobile App Section */}
                <div className="appsetup">
                    <h1>ENJOY THE APP!</h1>
                    <div className="quickaccess">
                        <img src={barcode} alt="Download App" className="barcode" />
                    </div>
                </div>

                {/* Footer */}
                <div className="footer-div">
                    <footer>
                        <p>&copy; 2024 My Redbus Clone. All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};


export default Home;
