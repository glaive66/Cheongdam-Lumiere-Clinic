import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import LoginModal from './LoginModal';
import { FaLock } from 'react-icons/fa';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleImageClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const galleryItems = [
    { id: 1, title: '시술 직후 즉각적 톤업', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: '무너진 턱선 리프팅', img: 'https://images.unsplash.com/photo-1615287661578-f7e914bf6895?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: '피부결 및 탄력 개선', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section id="gallery" className="section-padding" style={styles.section}>
      <div className="container">
        <FadeInSection>
          <div style={styles.header}>
            <h2 style={styles.title}>리얼 갤러리</h2>
            <p style={styles.subtitle}>
              루미에르 의원의 티타늄 리프팅 전후 사진입니다.<br/>
              의료법 제56조에 따라 <span style={{color: 'var(--main-gold)', fontWeight: 'bold'}}>회원가입(로그인)</span> 후 열람하실 수 있습니다.
            </p>
          </div>
        </FadeInSection>

        <div style={styles.grid}>
          {galleryItems.map((item, index) => (
            <FadeInSection delay={index * 200} key={item.id}>
              <div 
                style={styles.card} 
                onClick={handleImageClick}
              >
                <div style={styles.imageWrapper}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{
                      ...styles.image,
                      filter: isLoggedIn ? 'none' : 'blur(10px)'
                    }} 
                  />
                  {!isLoggedIn && (
                    <div style={styles.lockOverlay}>
                      <FaLock size={30} color="#fff" />
                      <span style={styles.lockText}>로그인 후 확인하기</span>
                    </div>
                  )}
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <LoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  card: {
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    aspectRatio: '4/3',
    backgroundColor: '#eee',
    marginBottom: '15px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'filter 0.5s ease'
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 10
  },
  lockText: {
    marginTop: '10px',
    fontWeight: '500',
    fontSize: '1.1rem'
  },
  cardTitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: 'var(--text-dark)',
    fontWeight: '500'
  }
};

export default Gallery;
