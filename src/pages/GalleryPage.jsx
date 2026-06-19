import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import LoginModal from '../components/LoginModal';

const GalleryPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoginRequired = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh', padding: '60px 0' }}>
      <Gallery 
        onLoginRequired={handleLoginRequired} 
        isLoggedIn={isLoggedIn} 
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default GalleryPage;
