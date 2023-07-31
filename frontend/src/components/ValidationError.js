import React from 'react';

const ValidationError = ({ errors }) => {
  return (
    <div className="text-danger">
      <ul>
        {errors &&  errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationError;
