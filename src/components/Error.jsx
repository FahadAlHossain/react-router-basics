import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="job-details">
      <h3>An error occurred!!</h3>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go to homepage</button>
    </div>
  );
};

export default Error;
