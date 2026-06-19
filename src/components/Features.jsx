import React from 'react';
import FadeInSection from './FadeInSection';
import { FaBolt, FaSnowflake, FaClock } from 'react-icons/fa';

const Features = () => {
  const featureData = [
    {
      icon: <FaBolt size={40} color="var(--main-gold)" />,
      title: "3파장 동시 조사",
      desc: "755nm, 810nm, 1064nm 세 가지 파장이 동시에 조사되어 피부 얕은 층부터 깊은 층까지 한 번에 리프팅합니다."
    },
    {
      icon: <FaSnowflake size={40} color="var(--main-gold)" />,
      title: "영하 3도 쿨링 시스템",
      desc: "사파이어 컨택트 쿨링 시스템으로 피부 표면을 안전하게 보호하여 통증 부담을 덜어줍니다."
    },
    {
      icon: <FaClock size={40} color="var(--main-gold)" />,
      title: "즉각적인 일상 복귀",
      desc: "시술 후 붓기나 붉은기가 거의 없어 중요한 일정을 앞두고도 부담 없이 받을 수 있습니다."
    }
  ];

  return (
    <section id="anti-aging" className="section-padding" style={styles.section}>
      <div className="container">
        <FadeInSection>
          <div style={styles.header}>
            <h2 style={styles.title}>독보적인 기술력, <span style={styles.highlight}>트리빔 티타늄 리프팅</span></h2>
            <p style={styles.subtitle}>루미에르만의 노하우가 결합되어 더욱 확실한 효과를 선사합니다.</p>
          </div>
        </FadeInSection>

        <div style={styles.grid}>
          {featureData.map((feature, index) => (
            <FadeInSection delay={index * 200} key={index}>
              <div style={styles.card}>
                <div style={styles.iconWrapper}>{feature.icon}</div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDesc}>{feature.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={600}>
          <div style={styles.imageContainer}>
            <img src="/images/티타늄 리프팅 장비 자료 및 강조 포인트.png" alt="티타늄 리프팅 장비" style={styles.equipmentImage} />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--bg-color)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    marginBottom: '15px',
  },
  highlight: {
    color: 'var(--main-gold)',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    transition: 'var(--transition-smooth)',
    height: '100%',
  },
  iconWrapper: {
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: 'var(--text-dark)',
    marginBottom: '15px',
    fontWeight: '500'
  },
  cardDesc: {
    color: 'var(--text-light)',
    lineHeight: '1.6',
  },
  imageContainer: {
    textAlign: 'center',
    marginTop: '40px'
  },
  equipmentImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  }
};

export default Features;
