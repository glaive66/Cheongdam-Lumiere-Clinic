import React from 'react';
import { SiKakaotalk, SiNaver } from 'react-icons/si';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  if (!isOpen) return null;

  const handleKakaoLogin = () => {
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    if (clientId) {
      // Actual Kakao OAuth URL
      const redirectUri = window.location.origin + '/oauth/kakao';
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    } else {
      // Mock Login for development
      alert("Kakao Client ID가 설정되지 않았습니다. 임시 로그인을 진행합니다.");
      onLoginSuccess();
    }
  };

  const handleNaverLogin = () => {
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    if (clientId) {
      // Actual Naver OAuth URL
      const redirectUri = window.location.origin + '/oauth/naver';
      const state = Math.random().toString(36).substring(3, 14);
      window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    } else {
      // Mock Login for development
      alert("Naver Client ID가 설정되지 않았습니다. 임시 로그인을 진행합니다.");
      onLoginSuccess();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        <h3 style={styles.title}>의료법에 따른 본인 인증</h3>
        <p style={styles.desc}>
          의료법 제56조에 의거하여 시술 전후 사진은<br/>로그인(본인 인증)을 하신 회원만 열람 가능합니다.
        </p>
        
        <div style={styles.buttonContainer}>
          <button style={styles.kakaoBtn} onClick={handleKakaoLogin}>
            <SiKakaotalk style={styles.icon} /> 카카오 1초 간편 로그인
          </button>
          <button style={styles.naverBtn} onClick={handleNaverLogin}>
            <SiNaver style={styles.icon} /> 네이버 1초 간편 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    backdropFilter: 'blur(3px)'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '1.5rem',
    color: '#999',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  title: {
    fontSize: '1.3rem',
    color: 'var(--text-dark)',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  desc: {
    fontSize: '0.95rem',
    color: 'var(--text-light)',
    marginBottom: '30px',
    lineHeight: '1.5'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  kakaoBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE500',
    color: '#000000',
    border: 'none',
    padding: '15px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.2s'
  },
  naverBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03C75A',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.2s'
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.2rem'
  }
};

export default LoginModal;
