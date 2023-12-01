"use client";
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import Image from 'next/image';
import pictc from '../logo/WhatsApp Image 2023-12-01 at 22.43.18_6d217bfe.jpg';

const HighContrastSwitch = () => {
  const [isHighContrast, setHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
    // You can apply additional logic or theme changes when switching between high contrast and normal mode
  };

  const highContrastStyles = {
    // Customize the styles for high contrast mode
    '& .MuiSwitch-track': {
      backgroundColor: isHighContrast ? '#fff' : '#000', // Adjust the background color for high contrast
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: isHighContrast ? '#000' : '#fff', // Adjust the thumb color for high contrast
    },
  };

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={toggleHighContrast}
          checked={isHighContrast}
          sx={isHighContrast ? highContrastStyles : {}}
        />
      }
      label="High Contrast"
    />
  );
};

export default function Home() {
  const containerStyle = {
    maxWidth: '600px',
    marginTop: '50px',
    padding: '20px',
    textAlign: 'left',
    margin: '', // Center the container
  };

  const navLinkStyle = {
    marginRight: '20px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
  };

  // Style for the active link
  const activeLinkStyle = {
    color: '',
  };

  const headingStyle = {
    marginTop: '20px',
    fontSize: '24px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f94C10',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonTop = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f94C10',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '20px',
  };

  const paragraphStyle = {
    textAlign: 'center', // Center the text
  };

  const parent = {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'left',
  };

  const imgStyle = {
    display: 'block', // Make the image a block element
    margin: '0 auto', // Center the image
    maxWidth: '100%', // Ensure the image does not exceed its container width
    marginTop: '50px', // Add some top margin
    height:'100vh'
  };

  return (
    <main style={containerStyle}>
      <div>
        <HighContrastSwitch />
        <button style={buttonTop}>Login</button>
        <button style={buttonTop}>Start Free or get a demo</button>
      </div>
      <nav>
        <Link legacyBehavior href="#" passHref>
          <a style={{ ...navLinkStyle, ...(window.location.pathname === '/' && activeLinkStyle) }}>
            About Us Template
          </a>
        </Link>
        <Link legacyBehavior href="./blog" passHref>
          <a style={{ ...navLinkStyle, ...(window.location.pathname === '/blog' && activeLinkStyle) }}>
            Blogs
          </a>
        </Link>
        <Link legacyBehavior href="./logo" passHref>
          <a style={{ ...navLinkStyle, ...(window.location.pathname === '/logo' && activeLinkStyle) }}>
            Logo Gallery
          </a>
        </Link>
      </nav>
      <h3 style={headingStyle}>
        Find the perfect Logo for Dude
      </h3>
      <div style={parent}>
        <Image src={pictc} alt="Landscape picture" width={800} height={300} />
      </div>
    </main>
  );
}
