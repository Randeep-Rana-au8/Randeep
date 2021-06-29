import React from 'react';

const Header = ({ data }) => {
  return (
    <div className="header">
      <nav>
        <h1>{data}</h1>
      </nav>
    </div>
  );
};

export default Header;
