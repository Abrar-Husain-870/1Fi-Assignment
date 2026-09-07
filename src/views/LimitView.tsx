export default function LimitView() {
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
      {/* Padlock & Gold Coins Illustration */}
      <div
        style={{
          width: '120px',
          height: '130px',
          position: 'relative',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="120" height="130" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="45" width="60" height="65" rx="16" fill="#712CDC" />
          <path d="M42 45V32C42 22.0589 50.0589 14 60 14V14C69.9411 14 78 22.0589 78 32V45" stroke="#712CDC" strokeWidth="8" strokeLinecap="round" />
          <circle cx="60" cy="72" r="8" fill="#171725" />
          <path d="M60 80V92" stroke="#171725" strokeWidth="4" strokeLinecap="round" />
          <circle cx="48" cy="22" r="7" fill="#F59E0B" stroke="#FEF08A" strokeWidth="2" />
          <circle cx="62" cy="18" r="6" fill="#F59E0B" stroke="#FEF08A" strokeWidth="2" />
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
        CHECK ELIGIBILITY
      </span>

      {/* Main Heading */}
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#171725',
          lineHeight: 1.35,
          marginBottom: '28px',
          maxWidth: '280px',
        }}
      >
        Shop on 0% interest backed by your Mutual Funds
      </h2>

      {/* Action Button */}
      <button
        onClick={() => alert('Fetching portfolio from CAMS / KFintech...')}
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
        Fetch my portfolio
      </button>
    </div>
  );
}
