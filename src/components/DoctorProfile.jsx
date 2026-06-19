import React from 'react';
import FadeInSection from './FadeInSection';

const DoctorProfile = () => {
  return (
    <section id="about" className="section-padding" style={styles.section}>
      <div className="container">
        <div style={styles.grid}>
          <div style={styles.imageContainer}>
            <FadeInSection>
              <img src="/images/의료진 프로필.png" alt="이진우 대표원장" style={styles.image} />
            </FadeInSection>
          </div>
          
          <div style={styles.contentContainer}>
            <FadeInSection delay={200}>
              <h2 style={styles.title}>
                본연의 아름다움을 되찾아주는<br />
                <span style={styles.highlight}>맞춤 안티에이징</span>
              </h2>
            </FadeInSection>
            
            <FadeInSection delay={400}>
              <p style={styles.philosophy}>
                "공장형 시술을 지양하고, 환자 한 분 한 분의 피부 상태와 골격에 맞춘 
                하이엔드 맞춤 진료만을 고집합니다."
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div style={styles.profileBox}>
                <h3 style={styles.name}>대표원장 이진우</h3>
                <ul style={styles.careerList}>
                  <li style={styles.careerItem}>서울대학교 의과대학 졸업</li>
                  <li style={styles.careerItem}>전) 청담 오라클 피부과 수석원장</li>
                  <li style={styles.careerItem}>대한피부항노화학회 정회원</li>
                  <li style={styles.careerItem}>대한비만미용학회 정회원</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fff',
  },
  grid: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  imageContainer: {
    flex: '1',
    minWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
  },
  contentContainer: {
    flex: '1.2',
    minWidth: '300px',
  },
  title: {
    fontSize: '2.5rem',
    lineHeight: '1.4',
    marginBottom: '30px',
    color: 'var(--text-dark)',
  },
  highlight: {
    color: 'var(--main-gold)',
  },
  philosophy: {
    fontSize: '1.2rem',
    color: 'var(--text-light)',
    fontStyle: 'italic',
    marginBottom: '40px',
    lineHeight: '1.8',
    paddingLeft: '20px',
    borderLeft: '3px solid var(--main-gold)'
  },
  profileBox: {
    backgroundColor: 'var(--bg-color)',
    padding: '30px',
    borderRadius: '8px',
    border: '1px solid var(--sub-beige)'
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: 'var(--text-dark)',
    fontWeight: 'bold'
  },
  careerList: {
    color: 'var(--text-light)',
  },
  careerItem: {
    marginBottom: '10px',
    position: 'relative',
    paddingLeft: '15px'
  }
};

export default DoctorProfile;
