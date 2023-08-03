// Loader.js

import React from 'react';

const Loader = ({text}) => {
  return (
    <div className="spinner-container">
        <div className="spinner"></div>
        <div className="loader-text">{text}</div>
    </div>
  );
};

export default Loader;
