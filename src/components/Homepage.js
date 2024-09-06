import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>    {/* Link to home page */}
        <li><Link to="women">Women</Link></li>  {/* Link to women page */}
      </ul>
    </div>
  );
}

export default Homepage;
