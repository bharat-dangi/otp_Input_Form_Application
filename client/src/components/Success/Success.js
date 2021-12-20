import React from "react";
import "./success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="successContainer">
      <p className="successMessage">Successful</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="linkButton">Return to Home Page</p>
      </Link>
    </div>
  );
};

export default Success;
