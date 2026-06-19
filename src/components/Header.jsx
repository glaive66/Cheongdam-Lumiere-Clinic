import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return {
      ...styles.navLink,
      color: location.pathname === path ? 'var(--main-gold)' : 'var(--text-dark)',
      fontWeight: location.pathname === path ? '700' : '500'
    };
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src="/images/로고.png" alt="청담 루미에르 의원" style={styles.logo} />
          </Link>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/about" style={getLinkStyle('/about')}>About</Link></li>
            <li style={styles.navItem}><Link to="/signature/titanium" style={getLinkStyle('/signature/titanium')}>Signature</Link></li>
            <li style={styles.navItem}><Link to="/anti-aging" style={getLinkStyle('/anti-aging')}>Anti-Aging</Link></li>
            <li style={styles.navItem}><Link to="/gallery" style={getLinkStyle('/gallery')}>Before & After</Link></li>
            <li style={styles.navItem}><Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff', // Changed to white to match reference
    padding: '25px 0 15px', // Adjusted padding for vertical layout
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    borderBottom: '1px solid #eaeaea'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px', // Spacing between logo and nav
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '135px', // Increased size by 3 times
    objectFit: 'contain',
    cursor: 'pointer'
  },
  nav: {
    display: 'flex',
  },
  navList: {
    display: 'flex',
    gap: '40px', // Wider gap for centered nav
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  navItem: {
    fontSize: '16px',
  },
  navLink: {
    transition: 'var(--transition-smooth)',
    textDecoration: 'none'
  }
};

export default Header;
