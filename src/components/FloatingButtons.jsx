import React from 'react';
import { SiKakaotalk, SiNaver } from 'react-icons/si';

const FloatingButtons = () => {
  return (
    <div style={styles.container}>
      <a href="https://pf.kakao.com/" target="_blank" rel="noreferrer" style={styles.kakaoButton} className="floating-btn">
        <SiKakaotalk size={24} />
      </a>
      <a href="https://booking.naver.com/" target="_blank" rel="noreferrer" style={styles.naverButton} className="floating-btn">
        <SiNaver size={20} />
      </a>
      <style>{`
        .floating-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .floating-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 999,
  },
  kakaoButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    backgroundColor: '#FEE500',
    color: '#000000',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  naverButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    backgroundColor: '#03C75A',
    color: '#FFFFFF',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  }
};

export default FloatingButtons;
