import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, Calendar, Headphones, LogOut, Bus } from "lucide-react";
import "./Navbar.css"; // Ensure this file is in the same directory

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Add navigation hook

  const handleLogout = () => {
    console.log("User logged out");
    // Add logout logic (e.g., clearing session storage)
    localStorage.removeItem("authToken"); // Clear authentication token (if used)
    navigate("/Logout"); // Redirect to Sign-in page
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <Bus className="navbar-icon" />
        <span>ApliBus</span>
      </Link>

      {/* Desktop Menu */}
      <div className="nav-links">
        <NavLink to="/" Icon={Home} label="Home" />
        <NavLink to="/booking" Icon={Calendar} label="Booking" />
        <NavLink to="/support" Icon={Headphones} label="Support" />
        <button onClick={handleLogout} className="nav-button">
          <LogOut className="navbar-icon" />
          <span>Logout</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <NavLink to="/" Icon={Home} label="Home" />
          <NavLink to="/booking" Icon={Calendar} label="Booking" />
          <NavLink to="/support" Icon={Headphones} label="Support" />
          <button onClick={handleLogout} className="nav-button">
            <LogOut className="navbar-icon" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, Icon, label }) => (
  <Link to={to} className="nav-link">
    <Icon className="navbar-icon" />
    <span>{label}</span>
  </Link>
);

export default Navbar;
