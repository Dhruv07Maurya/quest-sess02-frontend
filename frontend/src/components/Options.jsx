import React, { useState } from "react";

const Options = () => {
  const [activeTab, setActiveTab] = useState('user'); 

  return (
    <div className="tabs-container">
      <h1 className="header">Welcome to Our Platform</h1>
      <hr />
      
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          User
        </div>
        <div
          className={`tab ${activeTab === 'ngo' ? 'active' : ''}`}
          onClick={() => setActiveTab('ngo')}
        >
          NGO
        </div>
      </div>

      {activeTab === 'user' && (
        <div className="card">
          <div className="button-group">
            <button
              className="btn"
              onClick={() => (window.location.href = "/student-signup")}
            >
              Sign-up as User
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/student-signin")}
            >
              Sign-in as User
            </button>
          </div>
        </div>
      )}

  
      {activeTab === 'ngo' && (
        <div className="card">
          <div className="button-group">
            <button
              className="btn"
              onClick={() => (window.location.href = "/ngo-signup")}
            >
              Sign-up as NGO
            </button>
            <button
              className="btn"
              onClick={() => (window.location.href = "/ngo-signin")}
            >
              Sign-in as NGO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
