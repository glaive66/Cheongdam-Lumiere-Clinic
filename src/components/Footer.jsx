import React from 'react';
import FadeInSection from './FadeInSection';

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      <div className="container">
        <FadeInSection>
          <div style={styles.grid}>
            <div style={styles.infoSection}>
              <h3 style={styles.logo}>청담 루미에르 의원</h3>
              <p style={styles.address}>
                서울특별시 강남구 청담동 123-45 루미에르 빌딩 3층<br/>
                (압구정로데오역 4번 출구 도보 3분)
              </p>
              <div style={styles.contactInfo}>
                <p><strong>TEL:</strong> 02-1234-5678</p>
                <p><strong>FAX:</strong> 02-1234-5679</p>
              </div>
            </div>

            <div style={styles.timeSection}>
              <h4 style={styles.heading}>진료 시간</h4>
              <ul style={styles.timeList}>
                <li style={styles.timeItem}>
                  <span>평일</span> <span>10:00 - 19:30</span>
                </li>
                <li style={styles.timeItem}>
                  <span>토요일</span> <span>10:00 - 16:00</span>
                </li>
                <li style={styles.timeItem}>
                  <span>점심시간</span> <span>13:00 - 14:00</span>
                </li>
                <li style={styles.timeItem} style={{color: 'var(--main-gold)', marginTop: '5px'}}>
                  일요일 및 공휴일 휴진
                </li>
              </ul>
            </div>

            <div style={styles.mapSection}>
              <h4 style={styles.heading}>오시는 길 & 주차</h4>
              <p style={styles.text}>
                건물 1층에서 발렛 파킹 서비스를 제공합니다. (발렛비 3,000원 별도)<br/>
                만차 시 인근 유료 주차장을 이용해 주시기 바랍니다.
              </p>
              <div style={styles.mapContainer}>
                <iframe
                  title="병원 위치"
                  src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%B2%AD%EB%8B%B4%EB%8F%99%20123-45&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '4px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div style={styles.bottom}>
            <p style={styles.copyright}>
              사업자등록번호: 123-45-67890 | 대표자: 이진우<br/>
              © 2026 청담 루미에르 의원. All rights reserved.
            </p>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2A2A2A',
    color: '#E0E0E0',
    padding: '80px 0 30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  logo: {
    fontSize: '1.5rem',
    color: 'var(--sub-beige)',
    marginBottom: '20px',
    fontFamily: 'var(--font-serif)',
  },
  address: {
    marginBottom: '15px',
    lineHeight: '1.6',
    color: '#B0B0B0',
  },
  contactInfo: {
    color: '#B0B0B0',
    lineHeight: '1.8',
  },
  heading: {
    fontSize: '1.2rem',
    color: '#FFFFFF',
    marginBottom: '20px',
    fontWeight: '500',
  },
  timeList: {
    color: '#B0B0B0',
  },
  timeItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    maxWidth: '200px',
  },
  text: {
    color: '#B0B0B0',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '0.95rem',
  },
  mapContainer: {
    width: '100%',
    marginTop: '10px',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  bottom: {
    borderTop: '1px solid #444',
    paddingTop: '30px',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#888',
    lineHeight: '1.6',
  }
};

export default Footer;
