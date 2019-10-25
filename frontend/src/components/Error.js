import React from 'react';
export default ({error, closeError}) => error &&
  <div className="error-banner">
    {error}
    <button className="close" onClick={closeError}></button>
  </div>