import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'>
        The page you are looking for does not exist. Return to{" "}
        <Link to='/'>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
