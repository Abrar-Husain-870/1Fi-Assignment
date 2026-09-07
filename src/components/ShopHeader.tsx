import { Sparkles } from 'lucide-react';

export default function ShopHeader() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A0086 0%, #3B05B1 50%, #4D09C4 100%)',
        paddingTop: '24px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '12px',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <div style={{ flex: 1, paddingRight: '4px' }}>
          {/* NO-COST EMIs badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
              padding: '4px 12px',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={12} color="#FFFFFF" />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
              }}
            >
              NO-COST EMIs
            </span>
          </div>

          <h1
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.18,
              marginBottom: '10px',
              letterSpacing: '-0.4px',
            }}
          >
            Shop today,
            <br />
            Pay later using
            <br />
            Mutual funds.
          </h1>

          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.4,
            }}
          >
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>

        {/* Official 3D Hero Illustration */}
        <div
          style={{
            width: '160px',
            height: '150px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <img
            src="/assets/hero-illustration.png"
            alt="1Fi Shopping & Mutual Funds"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
}
