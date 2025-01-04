import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        setMessage("Registration successful!");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage(error.response.data.message || "Registration failed.");
      } else if (error.request) {
        // Request was made but no response received
        setMessage("Error connecting to server.");
      } else {
        // Other errors
        setMessage("An unexpected error occurred.");
      }
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #f6d365, #fda085)",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  };

  const formContainerStyle = {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    width: "400px",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  };

  const inputStyle = {
    width: "90%",
    padding: "15px",
    margin: "10px 0",
    border: "2px solid #ddd",
    borderRadius: "10px",
    fontSize: "16px",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle = {
    width: "95%",
    padding: "15px",
    backgroundColor: "#ff6b6b",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const linkButtonStyle = {
    background: "none",
    border: "none",
    color: "#ff6b6b",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "14px",
  };

  const messageStyle = {
    color: message.includes("successful") ? "green" : "red",
    marginTop: "10px",
    fontSize: "14px",
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  const hoverButtonKeyframes = `
    button:hover {
      background-color: #e63946;
      transform: scale(1.05);
    }
  `;

  const focusInputKeyframes = `
    input:focus {
      border-color: #ff6b6b;
      outline: none;
    }
  `;

  return (
    <div style={containerStyle}>
      <style>
        {fadeInKeyframes}
        {hoverButtonKeyframes}
        {focusInputKeyframes}
      </style>
      <div style={formContainerStyle}>
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <p style={messageStyle}>{message}</p>
        <p>
          Already have an account?{" "}
          <button onClick={() => navigate("/")} style={linkButtonStyle}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
