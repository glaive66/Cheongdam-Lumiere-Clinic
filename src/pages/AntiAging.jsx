import React, { useEffect } from 'react';

const AntiAging = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>High-end Anti-Aging</h1>
        <p style={styles.heroSub}>루미에르만의 독보적인 안티에이징 & 스킨부스터 솔루션</p>
      </div>

      <section style={styles.section}>
        <div className="container" style={styles.container}>
          <div style={styles.treatmentGroup}>
            <div style={styles.imagePlaceholder}>
               <img src="/images/프리미엄 리프팅.png" alt="Premium Lifting" style={styles.image} />
            </div>
            <div style={styles.textContainer}>
              <h2 style={styles.title}>Premium Lifting</h2>
              <h3 style={styles.subtitle}>프리미엄 리프팅</h3>
              <p style={styles.desc}>
                울쎄라, 써마지FLX 등 하이엔드 오리지널 장비만을 사용하여 개인의 피부 두께와 처짐 정도에 맞춘 1:1 맞춤 디자인 리프팅을 진행합니다.
              </p>
              <ul style={styles.list}>
                <li>울쎄라 (초음파 리프팅)</li>
                <li>써마지 FLX (고주파 리프팅)</li>
                <li>인모드, 슈링크 유니버스</li>
              </ul>
            </div>
          </div>

          <div style={{...styles.treatmentGroup, flexDirection: 'row-reverse'}}>
            <div style={styles.imagePlaceholder}>
               <img src="/images/스킨 부스터.png" alt="Skin Booster" style={styles.image} />
            </div>
            <div style={styles.textContainer}>
              <h2 style={styles.title}>Skin Booster</h2>
              <h3 style={styles.subtitle}>스킨 부스터</h3>
              <p style={styles.desc}>
                리쥬란 힐러, 쥬베룩, 엑소좀 등 프리미엄 스킨부스터를 통해 피부 속 깊은 곳부터 수분과 콜라겐을 채워 건강한 피부로 되돌려 줍니다.
              </p>
              <ul style={styles.list}>
                <li>리쥬란 힐러 (연어주사)</li>
                <li>쥬베룩 (콜라겐 생성)</li>
                <li>NCTF 135 (샤넬주사)</li>
              </ul>
            </div>
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
  section: {
    padding: '100px 0',
    backgroundColor: '#fff'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    alignItems: 'center'
  },
  treatmentGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    width: '100%',
    maxWidth: '1000px',
    flexWrap: 'wrap'
  },
  imagePlaceholder: {
    flex: '1',
    minWidth: '300px',
    height: '400px',
    backgroundColor: 'var(--sub-beige)',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  textContainer: {
    flex: '1',
    minWidth: '300px'
  },
  title: {
    fontSize: '1.5rem',
    color: 'var(--main-gold)',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  subtitle: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    marginBottom: '20px',
    fontFamily: 'var(--font-serif)'
  },
  desc: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '30px'
  },
  list: {
    listStylePosition: 'inside',
    color: '#444',
    fontSize: '1.1rem',
    lineHeight: '1.8'
  }
};

export default AntiAging;
