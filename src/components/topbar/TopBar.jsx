import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/cars" style={styles.link}>Cars</Link>
        </li>
        <li style={styles.li}>
          <Link to="/sell" style={styles.link}>Sell Your Car</Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;

const styles = {
  nav: {
    background: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  li: {
    margin: '0 10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
