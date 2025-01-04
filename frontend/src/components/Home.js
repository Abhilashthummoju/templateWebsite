import React from "react";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  };

  const contentStyle = {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
    width: "600px",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "36px",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "18px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    padding: "15px 30px",
    backgroundColor: "#6c63ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
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

  return (
    <div style={containerStyle}>
      <style>
        {fadeInKeyframes}
        {hoverButtonKeyframes}
      </style>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to the Home Page!</h1>
        <p style={paragraphStyle}>
          You have successfully logged in. Explore the features and
          functionality of the application. Have a great experience!
        </p>
        <button
          style={buttonStyle}
          onClick={() => {
            alert("Feature coming soon!");
          }}
        >
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default Home;
