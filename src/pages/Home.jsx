import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <section style={styles.quickLinksSection}>
        <div className="container" style={styles.container}>
          <h2 style={styles.title}>청담 루미에르 의원 진료과목</h2>
          <div style={styles.cardGrid}>
            <Link to="/signature/titanium" style={styles.card}>
              <div style={styles.cardImagePlaceholder}>
                <img src="/images/티타늄 리프팅.jpg" alt="티타늄 리프팅" style={styles.cardImage} />
              </div>
              <h3 style={styles.cardTitle}>시그니처: 티타늄 리프팅</h3>
              <p style={styles.cardDesc}>3가지 파장을 동시 조사하여 즉각적인 리프팅과 타이트닝, 화이트닝을 완성합니다.</p>
              <span style={styles.cardBtn}>자세히 보기 &rarr;</span>
            </Link>

            <Link to="/anti-aging" style={styles.card}>
              <div style={styles.cardImagePlaceholder}>
                 <img src="/images/하이엔드 안티에이징.jpg" alt="하이엔드 안티에이징" style={styles.cardImage} />
              </div>
              <h3 style={styles.cardTitle}>하이엔드 안티에이징</h3>
              <p style={styles.cardDesc}>스킨부스터, 울쎄라, 써마지 등 맞춤형 프리미엄 리프팅 & 색소 치료</p>
              <span style={styles.cardBtn}>자세히 보기 &rarr;</span>
            </Link>

            <Link to="/about" style={styles.card}>
              <div style={styles.cardImagePlaceholder}>
                <img src="/images/브랜드 철학.jpg" alt="브랜드 철학" style={styles.cardImage} />
              </div>
              <h3 style={styles.cardTitle}>브랜드 철학</h3>
              <p style={styles.cardDesc}>이진우 대표원장의 진료 철학과 하이엔드 프리미엄 진료 시설을 소개합니다.</p>
              <span style={styles.cardBtn}>자세히 보기 &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  quickLinksSection: {
    padding: '80px 0',
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    marginBottom: '50px',
    textAlign: 'center',
    fontWeight: '700'
  },
  cardGrid: {
    display: 'flex',
    gap: '30px',
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '380px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer'
  },
  cardImagePlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--sub-beige)',
    borderRadius: '8px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: 'var(--main-gold)',
    marginBottom: '15px',
    fontWeight: '600'
  },
  cardDesc: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    flexGrow: 1
  },
  cardBtn: {
    color: 'var(--main-gold)',
    fontWeight: '600',
    fontSize: '0.9rem',
    marginTop: 'auto',
    display: 'inline-block'
  }
};

export default Home;
