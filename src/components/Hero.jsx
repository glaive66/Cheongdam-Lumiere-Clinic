import React from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <section id="signature" style={styles.heroSection}>
      <div className="container" style={styles.container}>
        <FadeInSection delay={0}>
          <h1 style={styles.title}>
            수면마취 부담 없이,<br />
            일상으로 즉시 복귀하는<br />
            <span style={styles.highlight}>하이엔드 리프팅</span>
          </h1>
        </FadeInSection>
        
        <FadeInSection delay={300}>
          <p style={styles.subtitle}>
            청담 루미에르 의원의 시그니처, <strong>트리빔 티타늄 리프팅</strong>으로 본연의 아름다움을 되찾으세요.
          </p>
        </FadeInSection>
        
        <FadeInSection delay={600}>
          <div style={styles.ctaContainer}>
            <a href="#gallery" style={styles.primaryButton}>전후 사진 보기</a>
            <a href="#contact" style={styles.secondaryButton}>상담 예약하기</a>
          </div>
        </FadeInSection>
      </div>
      <div style={styles.overlay}></div>
    </section>
  );
};

const styles = {
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'var(--sub-beige)',
    backgroundImage: 'url(/images/로고.png)', // Placeholder for a real hero image if available, using logo as watermark here or solid color
    backgroundSize: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'soft-light'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(252, 252, 252, 0.85)',
    zIndex: 1
  },
  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px'
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.4',
    marginBottom: '20px',
    color: 'var(--text-dark)',
  },
  highlight: {
    color: 'var(--main-gold)',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-light)',
    marginBottom: '40px',
  },
  ctaContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: 'var(--main-gold)',
    color: '#fff',
    padding: '15px 40px',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'var(--transition-smooth)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'var(--text-dark)',
    border: '1px solid var(--text-dark)',
    padding: '15px 40px',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'var(--transition-smooth)',
  }
};

export default Hero;
