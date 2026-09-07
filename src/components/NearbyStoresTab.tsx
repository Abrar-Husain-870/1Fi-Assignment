import { useState } from 'react';
import { nearbyStoresData } from '../data/shopData';
import { ChevronDown, MapPin } from 'lucide-react';

interface NearbyStoresTabProps {
  searchQuery: string;
}

export default function NearbyStoresTab({ searchQuery }: NearbyStoresTabProps) {
  const [selectedLocation, setSelectedLocation] = useState('Lucknow');

  const filteredStores = nearbyStoresData.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px 16px 100px 16px' }}>
      {/* Header Row: Title & Location Selector */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#1A1D1E',
            letterSpacing: '-0.3px',
          }}
        >
          Nearby Stores
        </h2>

        {/* Location Dropdown Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#F3ECFC',
            border: '1px solid rgba(113, 44, 220, 0.15)',
            borderRadius: '9999px',
            padding: '4px 12px',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#712CDC',
            }}
          >
            {selectedLocation}
          </span>
          <ChevronDown size={14} color="#712CDC" />
        </div>
      </div>

      {/* Vertical List of Store Cards matching Image 1 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredStores.map((store) => (
          <div
            key={store.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '18px 20px',
              border: '1px solid #F0F0F4',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              cursor: 'pointer',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
          >
            {/* Store Logo Container */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: store.bgColor || '#FFFFFF',
                border: '1px solid #EAEAEA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
                padding: '4px',
              }}
            >
              {store.logoUrl ? (
                <img
                  src={store.logoUrl}
                  alt={store.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '12px',
                    color: store.textColor || '#712CDC',
                    textAlign: 'center',
                    lineHeight: 1.1,
                  }}
                >
                  {store.logoText}
                </span>
              )}
            </div>

            {/* Store Details */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '4px',
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#1A1D1E',
                    lineHeight: 1.25,
                  }}
                >
                  {store.name}
                </h3>

                {/* Distance Badge matching Image 1 */}
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#505062',
                    backgroundColor: '#EEEDF2',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    flexShrink: 0,
                    letterSpacing: '0.3px',
                  }}
                >
                  {store.distance}
                </span>
              </div>

              {/* Store Address */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#6E6E82',
                  lineHeight: 1.4,
                  marginBottom: '8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {store.address}
              </p>

              {/* View on map link */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#712CDC',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                <MapPin size={13} color="#712CDC" />
                <span>View on map</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredStores.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 16px', color: '#8A8A9E' }}>
          <p style={{ fontSize: '14px', fontWeight: 500 }}>No nearby stores found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
