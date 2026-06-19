import React, { useEffect } from 'react';
import { FaCheckCircle, FaLightbulb, FaRegClock, FaRegCalendarCheck } from 'react-icons/fa';

const Signature = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "통증이 심한가요?",
      a: "사파이어 쿨링 시스템이 영하 3도까지 표피를 냉각하여 통증을 현저히 줄여줍니다. 마취 연고 없이도 편안하게 시술받으실 수 있습니다."
    },
    {
      q: "시술 직후 일상생활이 가능한가요?",
      a: "네, 시술 직후 붉은기나 붓기가 거의 없어 바로 메이크업 및 일상생활이 가능합니다."
    },
    {
      q: "어떤 분들에게 추천하나요?",
      a: "처진 피부와 이중턱이 고민이신 분, 즉각적인 리프팅과 피부톤 개선(화이트닝)을 동시에 원하시는 분들에게 강력히 추천합니다."
    }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.heroBanner}>
        <div className="container" style={styles.heroContainer}>
          <h1 style={styles.heroTitle}>트리빔 티타늄 리프팅</h1>
          <p style={styles.heroSub}>
            리프팅, 타이트닝, 화이트닝을 한 번에.<br/>
            단 하나의 시술로 완성하는 하이엔드 솔루션.
          </p>
        </div>
      </div>

      {/* Main Feature Section */}
      <section style={styles.section}>
        <div className="container" style={styles.container}>
          <div style={styles.featureHeader}>
            <h2 style={styles.sectionTitle}>Why Titanium?</h2>
            <p style={styles.sectionDesc}>기존 리프팅의 한계를 뛰어넘는 티타늄 리프팅만의 특별함</p>
          </div>

          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.iconWrapper}><FaLightbulb size={40} color="var(--main-gold)" /></div>
              <h3 style={styles.cardTitle}>3파장 동시 조사</h3>
              <p style={styles.cardDesc}>1064nm, 810nm, 755nm 세 가지 파장이 동시에 조사되어 피부 얕은 층부터 깊은 근막층(SMAS)까지 강력한 리프팅 효과를 냅니다.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.iconWrapper}><FaCheckCircle size={40} color="var(--main-gold)" /></div>
              <h3 style={styles.cardTitle}>사파이어 쿨링 시스템</h3>
              <p style={styles.cardDesc}>영하 3도의 강력한 컨택트 쿨링으로 통증과 붉은기를 최소화하여 편안한 시술을 제공합니다.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.iconWrapper}><FaRegClock size={40} color="var(--main-gold)" /></div>
              <h3 style={styles.cardTitle}>즉각적인 효과</h3>
              <p style={styles.cardDesc}>시술 즉시 타이트닝 효과와 함께 멜라닌 색소 파괴로 인한 브라이트닝 효과를 경험할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section style={{...styles.section, backgroundColor: 'var(--sub-beige)'}}>
        <div className="container" style={styles.container}>
          <h2 style={styles.sectionTitle}>이런 분들께 추천합니다</h2>
          <ul style={styles.targetList}>
            <li style={styles.targetItem}><FaRegCalendarCheck color="var(--main-gold)" /> 중요한 일정을 앞두고 빠른 효과가 필요하신 분</li>
            <li style={styles.targetItem}><FaRegCalendarCheck color="var(--main-gold)" /> 기존 울쎄라, 써마지의 통증이 부담스러우셨던 분</li>
            <li style={styles.targetItem}><FaRegCalendarCheck color="var(--main-gold)" /> 턱선 무너짐, 이중턱 등 V라인 개선을 원하시는 분</li>
            <li style={styles.targetItem}><FaRegCalendarCheck color="var(--main-gold)" /> 탄력 개선과 피부 톤업(제모 효과 포함)을 동시에 원하시는 분</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.section}>
        <div className="container" style={styles.container}>
          <h2 style={styles.sectionTitle}>자주 묻는 질문 (FAQ)</h2>
          <div style={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} style={styles.faqItem}>
                <h4 style={styles.faqQ}>Q. {faq.q}</h4>
                <p style={styles.faqA}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#fff'
  },
  heroBanner: {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/티타늄기기.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '120px 0',
    color: '#fff',
    textAlign: 'center'
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: 'var(--main-gold)'
  },
  heroSub: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    fontWeight: '300'
  },
  section: {
    padding: '100px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1000px'
  },
  featureHeader: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    marginBottom: '20px',
    fontFamily: 'var(--font-serif)',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    width: '100%'
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  iconWrapper: {
    marginBottom: '20px'
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
  },
  targetList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '600px'
  },
  targetItem: {
    fontSize: '1.2rem',
    color: 'var(--text-dark)',
    padding: '20px',
    backgroundColor: '#fff',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  faqList: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  faqItem: {
    backgroundColor: 'var(--sub-beige)',
    padding: '30px',
    borderRadius: '12px',
  },
  faqQ: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-dark)',
    marginBottom: '10px'
  },
  faqA: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: '#555'
  }
};

export default Signature;
