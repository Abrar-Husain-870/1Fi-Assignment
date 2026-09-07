import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Lock, Percent, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function HomeView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const topBrandsList = [
    { id: 'makemytrip', name: 'MakeMyTrip', logo: '/assets/brands/makemytrip.png' },
    { id: 'air-india', name: 'Air India', logo: '/assets/brands/air-india.png' },
    { id: 'goibibo', name: 'Goibibo', logo: '/assets/brands/goibibo.png' },
    { id: 'wakefit', name: 'Wakefit', logo: '/assets/brands/wakefit.png' },
    { id: 'easemytrip', name: 'EaseMyTrip', logo: '/assets/brands/easemytrip-holiday.png' },
    { id: 'yatra', name: 'Yatra', logo: '/assets/brands/yatra.png' },
    { id: 'taj', name: 'Taj', logo: '/assets/brands/taj-experiences.png' },
    { id: 'apple', name: 'Apple', logo: '/assets/brands/apple-reseller.png' },
    { id: 'reliance-digital', name: 'Reliance Digital', logo: '/assets/brands/reliance-digital.png' },
  ];

  const faqs = [
    {
      question: 'What is 1Fi?',
      answer: '1Fi is an instant credit platform that allows you to shop on No-Cost EMIs backed by your existing Mutual Fund investments without redeeming them.',
    },
    {
      question: 'Is 1Fi safe and legit?',
      answer: 'Yes, 1Fi works with RBI-regulated digital lending partners and depositories (CDSL/NSDL) to securely pledge your portfolio.',
    },
    {
      question: 'Who is the RBI approved lending partner?',
      answer: 'Our loans are powered by regulated NBFCs & Banking partners registered with the Reserve Bank of India.',
    },
    {
      question: 'What documents are needed to take a loan?',
      answer: 'No physical paperwork required. Just complete quick digital KYC using PAN and Aadhaar OTP.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'Zero hidden fees, zero processing charges, and zero foreclosure penalties.',
    },
    {
      question: 'What if markets fall?',
      answer: 'Your pledged mutual funds continue to grow in value. Standard Loan-To-Value (LTV) limits ensure your portfolio is protected.',
    },
    {
      question: 'Are there any charges if I pay early to release my pledged mutual fund units?',
      answer: 'No! You can foreclose your loan anytime with zero pre-closure penalty and instantly release your pledged units.',
    },
  ];

  return (
    <div style={{ width: '100%', padding: '16px 16px 100px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Hero Banner: GET STARTED */}
      <div
        style={{
          width: '100%',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #3A05B1 0%, #5E14E2 50%, #7E22CE 100%)',
          padding: '24px 20px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(94, 20, 226, 0.25)',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.75)',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          GET STARTED
        </span>
        <h2 style={{ fontSize: '24px', fontWeight: 800, lineHeight: 1.2, marginBottom: '8px' }}>
          Shop on no-cost EMI
        </h2>
        <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4, marginBottom: '20px', maxWidth: '220px' }}>
          Backed by your mutual funds, No credit pull, No charges, & quick approval.
        </p>

        <button
          style={{
            backgroundColor: '#FFFFFF',
            color: '#3A05B1',
            border: 'none',
            borderRadius: '9999px',
            padding: '12px 20px',
            fontWeight: 700,
            fontSize: '13px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <span>Check eligibility</span>
          <ArrowRight size={16} />
        </button>

        {/* 0% Interest Badge graphic on right */}
        <div
          style={{
            position: 'absolute',
            right: '-10px',
            bottom: '-10px',
            fontSize: '64px',
            fontWeight: 900,
            color: 'rgba(255, 255, 255, 0.18)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          0%
        </div>
      </div>

      {/* OFFERS Carousel Section */}
      <div>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', color: '#712CDC', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          OFFERS
        </span>
        <div
          style={{
            width: '100%',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
            padding: '20px',
            color: '#FFFFFF',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#F59E0B', display: 'block', marginBottom: '6px' }}>
            FURNITURE | MATTRESS | HOME DECOR
          </span>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px' }}>
            Dream homes to sweet dreams
          </h3>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <Sparkles size={14} color="#F59E0B" />
            <span>Comfort on 12m no-cost EMIs</span>
          </div>
        </div>
      </div>

      {/* SHOP USING 1FI AT TOP BRANDS */}
      <div>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', color: '#712CDC', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          SHOP USING 1FI AT TOP BRANDS
        </span>
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          {topBrandsList.map((brand) => (
            <div
              key={brand.id}
              style={{
                width: '76px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #F0F0F4',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  marginBottom: '6px',
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#1A1D1E', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY PAY WITH 1FI */}
      <div>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', color: '#712CDC', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          WHY PAY WITH 1FI
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', border: '1px solid #F0F0F4' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#F3ECFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#712CDC', marginBottom: '10px' }}>
              <Percent size={18} />
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A1D1E', marginBottom: '2px' }}>0% interest</h4>
            <p style={{ fontSize: '12px', color: '#6E6E82' }}>Repay only what you spend.</p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', border: '1px solid #F0F0F4' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '10px' }}>
              <ShieldCheck size={18} />
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A1D1E', marginBottom: '2px' }}>Keep returns</h4>
            <p style={{ fontSize: '12px', color: '#6E6E82' }}>No tax & portfolio growth.</p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', border: '1px solid #F0F0F4' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', marginBottom: '10px' }}>
              <Zap size={18} />
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A1D1E', marginBottom: '2px' }}>Zero charges</h4>
            <p style={{ fontSize: '12px', color: '#6E6E82' }}>No fees, nothing hidden.</p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '16px', border: '1px solid #F0F0F4' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', marginBottom: '10px' }}>
              <Lock size={18} />
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1A1D1E', marginBottom: '2px' }}>Quick approval</h4>
            <p style={{ fontSize: '12px', color: '#6E6E82' }}>Instant eligibility check.</p>
          </div>
        </div>
      </div>

      {/* HOW 1FI WORKS */}
      <div>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', color: '#712CDC', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          HOW 1FI WORKS
        </span>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '20px 16px', border: '1px solid #F0F0F4', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#712CDC', color: '#FFFFFF', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>1</div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1A1D1E', display: 'block', lineHeight: 1.2 }}>CONNECT YOUR<br />PORTFOLIO</span>
          </div>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#712CDC', color: '#FFFFFF', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>2</div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1A1D1E', display: 'block', lineHeight: 1.2 }}>UNLOCK YOUR<br />LIMIT</span>
          </div>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#712CDC', color: '#FFFFFF', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>3</div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1A1D1E', display: 'block', lineHeight: 1.2 }}>SHOP & PAY<br />LATER</span>
          </div>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div>
        <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', color: '#712CDC', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          FREQUENTLY ASKED QUESTIONS
        </span>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', border: '1px solid #F0F0F4', overflow: 'hidden' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} style={{ borderBottom: index < faqs.length - 1 ? '1px solid #F0F0F4' : 'none' }}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1D1E', paddingRight: '12px' }}>{faq.question}</span>
                  {isOpen ? <ChevronUp size={18} color="#712CDC" /> : <ChevronDown size={18} color="#8A8A9E" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 16px 16px 16px', fontSize: '13px', color: '#6E6E82', lineHeight: 1.5 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
