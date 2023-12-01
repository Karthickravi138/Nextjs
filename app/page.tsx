"use client";
import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import Image from 'next/image';
import pic from '../images/WhatsApp Image 2023-12-01 at 20.11.39_a5e539d7.jpg';

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
    marginTop: '20px', // Add some top margin
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
        27 Best About Us and About Me Page Examples of Templates of 2023[+Templates]
      </h3>
      <button style={buttonStyle}>Download Now: Free about Us Examples</button>
      <div style={parent}>
        <p style={paragraphStyle}>
          Your about page summarizes your history, values, and mission all in one place. <br /> That's a
          tall order for just a few paragraphs. If you're feeling stuck, turn to these<br /> about-page
          examples for inspiration.
        </p>
        <Image src={pic} alt="Landscape picture" width={800} height={100} />
      </div>
    </main>
  );
}
