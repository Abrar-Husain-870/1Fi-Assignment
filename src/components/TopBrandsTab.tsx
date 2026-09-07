import { topBrandsData } from '../data/shopData';

interface TopBrandsTabProps {
  searchQuery: string;
}

export default function TopBrandsTab({ searchQuery }: TopBrandsTabProps) {
  const filteredBrands = topBrandsData.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.subtext.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px 16px 100px 16px' }}>
      {/* Section Title */}
      <h2
        style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#1A1D1E',
          marginBottom: '14px',
          letterSpacing: '-0.3px',
        }}
      >
        Top Brands
      </h2>

      {/* Single-Column Vertical List matching Image 1 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '16px 18px',
              border: '1px solid #F0F0F4',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
          >
            {/* Brand Logo Container */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: brand.bgColor || '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              }}
            >
              <img
                src={brand.logoUrl}
                alt={brand.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Brand Details */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1A1D1E',
                  marginBottom: '4px',
                  lineHeight: 1.25,
                }}
              >
                {brand.name}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#6E6E82',
                  lineHeight: 1.35,
                }}
              >
                {brand.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 16px', color: '#8A8A9E' }}>
          <p style={{ fontSize: '14px', fontWeight: 500 }}>No brands found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
