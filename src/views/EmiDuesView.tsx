import { HelpCircle } from 'lucide-react';

export default function EmiDuesView() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      {/* Receipt Graphic Illustration */}
      <div
        style={{
          width: '120px',
          height: '140px',
          position: 'relative',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20C20 14.4772 24.4772 10 30 10H90C95.5228 10 100 14.4772 100 20V120L90 112L80 120L70 112L60 120L50 112L40 120L30 112L20 120V20Z" fill="#FFFFFF" stroke="#E2E2EA" strokeWidth="2.5" />
          <line x1="35" y1="36" x2="65" y2="36" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
          <line x1="35" y1="52" x2="85" y2="52" stroke="#E2E2EA" strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="64" x2="75" y2="64" stroke="#E2E2EA" strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="76" x2="55" y2="76" stroke="#E2E2EA" strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="92" x2="85" y2="92" stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="92" cy="30" r="14" fill="#712CDC" />
          <text x="92" y="36" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">?</text>
        </svg>
      </div>

      {/* Subtitle */}
      <span
        style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '1px',
          color: '#8A8A9E',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        NOTHING DUE YET
      </span>

      {/* Main Heading */}
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#171725',
          lineHeight: 1.3,
          marginBottom: '28px',
          maxWidth: '260px',
        }}
      >
        Looks like you haven't shopped yet with 1Fi
      </h2>

      {/* Action Button */}
      <button
        onClick={() => alert('Checking 1Fi eligibility...')}
        style={{
          backgroundColor: '#712CDC',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '9999px',
          padding: '16px 36px',
          fontWeight: 700,
          fontSize: '15px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(113, 44, 220, 0.35)',
        }}
      >
        Check eligibility
      </button>
    </div>
  );
}
