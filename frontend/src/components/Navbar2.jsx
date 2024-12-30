import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    income: 50000,
    virtualCurrency: 100,
    ngoName: "Helping Hands",
    profilePicture:
      "https://bolt-gcdn.sc-cdn.net/3/L1yaXqhMQGN8QPgxFYr8y?bo=EhgaABoAMgF9OgEEQgYI-vDorAZIAlASYAE%3D&uc=18", // Placeholder for profile picture
  };

  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsPopupOpen(true);
  };

  const handleNavigateToVideos = () => {
    navigate("/videos");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleNavigateToVideos2 = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={user.profilePicture}
          alt="User Profile"
          className="profile-pic"
          onClick={handleProfileClick}
        />
        <span className="user-name" onClick={handleProfileClick}>
          {user.name}
        </span>
      </div>

      <div className="navbar-right">
        <span className="currency-count">
          Virtual Currency: {user.virtualCurrency}
        </span>
        <button className="navigate-btn" onClick={handleNavigateToVideos}>
          Go to Videos
        </button>

        <button onClick={handleNavigateToVideos2}>Logout</button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="cancel-btn" onClick={handleClosePopup}>
              X
            </button>
            <div className="popup-content">
              <h3>User Details</h3> <hr /> <br />
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Income:</strong> ${user.income}
              </p>
              <p>
                <strong>Virtual Currency:</strong> {user.virtualCurrency}
              </p>
              <p>
                <strong>NGO Name:</strong> {user.ngoName}
              </p>
              <br /> <hr /> <br />
              <button onClick={handleNavigateToVideos2}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
