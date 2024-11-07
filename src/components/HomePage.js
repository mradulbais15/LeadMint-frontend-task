import React from "react";
import "../App.css"; // Import your custom styles (optional)

import Charts from "../components/Charts.js"
import Navbar from "../Navbar.js"







const App = () => {

    const cardData = [
      { title: "User Statistics", content: "Active users: 1245" },
      { title: "Recent Activities", content: "Last login: 2 hours ago" },
      { title: "System Health", content: "All systems are running smoothly!" },
      // Add more cards as needed
    ];
  return (
    <div className="container">
      {/* Navigation Bar */}
      {<Navbar />}

      {/* Home Page Content */}
      <div className="home-content">
        {/* Cards Section */}
        <div className="cards-container">
          {cardData.map((card, index) => (
            <div key={index} className="card card-body">
              <h3 class="card-header">{card.title}</h3>
              <p class="text-content2">{card.content}</p>
              <div class="card-footer">
                <button class="btn-secondary btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graph Section */}
      {<Charts />}
    </div>
  );
};

export default App;
