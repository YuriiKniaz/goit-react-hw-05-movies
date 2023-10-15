import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <span>
        Error occurred, try again or go back to home page
        <Link to="/"> Home</Link>
      </span>
    </div>
  );
};

export default NotFound;
