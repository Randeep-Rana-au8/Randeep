import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#717171',
        color: 'white',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        height: '40vh',
        alignItems: 'center',
      }}
    >
      <ul
        style={{
          display: 'flex',
          textDecoration: 'none',
          alignItems: 'center',
        }}
      >
        <li style={{ marginRight: '40px' }}>Contact Me</li>
        <li style={{ marginRight: '40px' }}>My Work</li>
        <li style={{ marginRight: '40px' }}>About Me</li>
      </ul>
    </div>
  );
};

export default Footer;
