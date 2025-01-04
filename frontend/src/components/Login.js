import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        // Navigate to the home page
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage(error.response.data.message || "Login failed.");
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
    background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
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
    backgroundColor: "#6c63ff",
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
    color: "#6c63ff",
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
      background-color: #4a42d4;
      transform: scale(1.05);
    }
  `;

  const focusInputKeyframes = `
    input:focus {
      border-color: #6c63ff;
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
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Login</h1>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p style={messageStyle}>{message}</p>
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} style={linkButtonStyle}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
