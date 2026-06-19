import React, { useEffect } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaParking } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroSub}>루미에르 의원 오시는 길 및 진료 안내</p>
      </div>

      <div className="container" style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.infoSection}>
            <div style={styles.infoCard}>
              <h2 style={styles.infoTitle}>진료 시간</h2>
              <ul style={styles.infoList}>
                <li><span style={styles.label}><FaRegClock/> 평일:</span> 10:00 - 20:00</li>
                <li><span style={styles.label}><FaRegClock/> 토요일:</span> 10:00 - 16:00</li>
                <li><span style={styles.label}>점심시간:</span> 13:00 - 14:00 (토요일 없음)</li>
                <li style={{color: 'var(--main-gold)', marginTop: '10px'}}>* 일요일 및 공휴일 휴진</li>
              </ul>
            </div>

            <div style={styles.infoCard}>
              <h2 style={styles.infoTitle}>예약 및 문의</h2>
              <ul style={styles.infoList}>
                <li><span style={styles.label}><FaPhoneAlt/> 대표번호:</span> 02-1234-5678</li>
                <li><span style={styles.label}>카카오톡:</span> @청담루미에르의원</li>
              </ul>
            </div>

            <div style={styles.infoCard}>
              <h2 style={styles.infoTitle}>주차 안내</h2>
              <ul style={styles.infoList}>
                <li><span style={styles.label}><FaParking/> 발렛파킹:</span> 건물 앞 전용 발렛 부스 이용 (무료)</li>
              </ul>
            </div>
          </div>

          <div style={styles.mapSection}>
            <h2 style={styles.infoTitle}><FaMapMarkerAlt/> 오시는 길</h2>
            <p style={styles.address}>서울특별시 강남구 청담동 123-45, 루미에르빌딩 2층</p>
            <div style={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7954930104764!2d127.04273577583648!3d37.51276227205256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca47596a234bd%3A0x86706e5da5e1c0c6!2z7ISc7Jq47Yq567OE7IucIOqw5uCSoOq1rCDssq3ri7Trj5kgMTIzLTQ1!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="clinic location"
              ></iframe>
            </div>
            <div style={styles.mapButtons}>
              <a href="https://map.naver.com" target="_blank" rel="noreferrer" style={styles.mapBtn}>네이버 지도</a>
              <a href="https://map.kakao.com" target="_blank" rel="noreferrer" style={styles.mapBtn}>카카오 지도</a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={styles.mapBtn}>구글 지도</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#fff',
    paddingBottom: '100px'
  },
  heroBanner: {
    backgroundColor: 'var(--sub-beige)',
    padding: '100px 0',
    textAlign: 'center',
    borderBottom: '1px solid #e5dfd5',
    marginBottom: '80px'
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
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  contentWrapper: {
    display: 'flex',
    gap: '60px',
    flexWrap: 'wrap'
  },
  infoSection: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },
  mapSection: {
    flex: '2',
    minWidth: '400px'
  },
  infoCard: {
    backgroundColor: 'var(--sub-beige)',
    padding: '30px',
    borderRadius: '12px',
  },
  infoTitle: {
    fontSize: '1.5rem',
    color: 'var(--text-dark)',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  infoList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555'
  },
  label: {
    fontWeight: '600',
    color: 'var(--text-dark)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px'
  },
  address: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px'
  },
  mapContainer: {
    width: '100%',
    height: '450px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    marginBottom: '20px'
  },
  mapButtons: {
    display: 'flex',
    gap: '15px'
  },
  mapBtn: {
    padding: '12px 24px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    color: 'var(--text-dark)',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  }
};

export default Contact;
