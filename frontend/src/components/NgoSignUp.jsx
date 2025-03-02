import React, { useState } from "react";
import axios from "axios";

const NgoSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/ngo/signup", formData);
      if (response.data.success) {
        setSuccess(response.data.message);
        setError("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setSuccess("");
    }
  };

  return (
    <div className="signup-container">
      <h2>NGO Sign Up</h2>  <hr /> <br />
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          namerequired
          placeholder="NGO Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          required
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NgoSignUp;