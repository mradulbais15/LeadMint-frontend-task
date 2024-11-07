
// import React from "react";
// import "./App.css"; // Import your custom styles (optional)



// const Navbar = () => {
//   return (
    
    
//     <div className="container">
//       {/* Navigation Bar */}
//       <nav className="ripple-nav">
//         <ul className="nav-list">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#stats">Statistics</a>
//           </li>

//           <li className="nav-item">
//             <Link to="/login" className="ripple-link">
//               Login
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link to="/register" className="ripple-link">
//               Register
//             </Link>
//           </li>

//           <li>
//             <a href="#activities">Activities</a>
//           </li>
//           <li>
//             <a href="#profile">Profile</a>
//           </li>
//         </ul>
//       </nav>


//       <div>
        


        
//       </div>



      

//       </div>

          
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "../src/navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="navbar-item" href="#home">
          <Link to="/" className="ripple-link">
            LeadMint
          </Link>
        </a>
      </div>
      <div className={`navbar-end ${isOpen ? "active" : ""}`}>
        <a className="navbar-item" href="#home">
          <Link to="/" className="ripple-link">
            Home
          </Link>
        </a>
        <a className="navbar-item" href="#about">
          About
        </a>
        <a className="navbar-item" href="#contact">
          Contact
        </a>
        <a className="navbar-item" href="#login">
          <Link to="/login" className="ripple-link">
            Login
          </Link>
        </a>
        <a className="navbar-item" href="#register">
          <Link to="/register" className="ripple-link">
            Register
          </Link>
        </a>
      </div>
      {/* Hamburger icon for mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

