import React, { useEffect } from 'react';
import DoctorProfile from '../components/DoctorProfile';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>Brand Philosophy</h1>
        <p style={styles.heroSub}>청담 루미에르 의원의 진료 철학과 프리미엄 공간</p>
      </div>
      
      <DoctorProfile />

      <section style={styles.interiorSection}>
        <div className="container" style={styles.container}>
          <h2 style={styles.sectionTitle}>Premium Facility</h2>
          <p style={styles.sectionDesc}>오직 당신만을 위한 프라이빗하고 안락한 진료 공간</p>
          
          <div style={styles.galleryGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} style={styles.galleryItem}>
                <img 
                  src={`/images/Interior View ${item}.png`} 
                  alt={`Interior View ${item}`} 
                  style={styles.actualImage} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  heroBanner: {
    backgroundColor: 'var(--sub-beige)',
    padding: '100px 0',
    textAlign: 'center',
    borderBottom: '1px solid #e5dfd5'
  },
  heroTitle: {
    fontSize: '3rem',
    color: 'var(--main-gold)',
    marginBottom: '20px',
    fontFamily: 'var(--font-serif)',
  },
  heroSub: {
    fontSize: '1.2rem',
    color: 'var(--text-dark)',
  },
  interiorSection: {
    padding: '100px 0',
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: 'var(--main-gold)',
    marginBottom: '20px',
    fontFamily: 'var(--font-serif)',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '50px',
    textAlign: 'center'
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  galleryItem: {
    width: '100%',
    height: '250px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
  },
  actualImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
};

export default About;
