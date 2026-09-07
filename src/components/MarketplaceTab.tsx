import { useMemo, useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import {
  marketplaceCategories,
  marketplaceBanners,
  marketplaceProducts,
  type MarketplaceProduct,
} from '../data/marketplaceData';

interface MarketplaceTabProps {
  searchQuery: string;
  onSelectProduct?: (product: MarketplaceProduct) => void;
}

export default function MarketplaceTab({ searchQuery, onSelectProduct }: MarketplaceTabProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return marketplaceProducts.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="animate-fade-in" style={{ width: '100%', paddingBottom: '96px' }}>
      {/* Category filter pills */}
      <div style={{ width: '100%', padding: '0 16px', marginBottom: '16px' }}>
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            padding: '4px 0',
          }}
        >
          {marketplaceCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  border: `1px solid ${isActive ? '#712CDC' : '#E8E8EE'}`,
                  cursor: 'pointer',
                  outline: 'none',
                  flexShrink: 0,
                  backgroundColor: isActive ? '#712CDC' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#505062',
                  boxShadow: isActive
                    ? '0 2px 8px rgba(113, 44, 220, 0.25)'
                    : '0 1px 3px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promotional banners - only shown when no search query */}
      {!searchQuery && (
        <div style={{ width: '100%', padding: '0 16px', marginBottom: '20px' }}>
          <div
            className="no-scrollbar"
            style={{ display: 'flex', gap: '12px', overflowX: 'auto', padding: '4px 0' }}
          >
            {marketplaceBanners.map((banner) => (
              <div
                key={banner.id}
                style={{
                  flexShrink: 0,
                  width: '288px',
                  borderRadius: '16px',
                  padding: '16px',
                  color: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: banner.gradientBg,
                  minHeight: '140px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      style={{
                        padding: '2px 10px',
                        borderRadius: '9999px',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {banner.tag}
                    </span>
                    {banner.brandLogoUrl && (
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '2px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      >
                        <img
                          src={banner.brandLogoUrl}
                          alt={banner.title}
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '4px' }}
                        />
                      </div>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: '4px',
                    }}
                  >
                    {banner.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {banner.subtitle}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      textDecoration: 'underline',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {banner.ctaText} <ArrowRight size={14} />
                  </span>
                  <Sparkles size={16} color="#FCD34D" style={{ opacity: 0.9 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section header */}
      <div
        style={{
          width: '100%',
          padding: '0 16px',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#171725' }}>
          {activeCategory === 'All' ? '1Fi Marketplace' : activeCategory}
        </h2>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#8A8A9E' }}>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>

      {/* Product list */}
      <div style={{ width: '100%', padding: '0 16px' }}>
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct?.(product);
                }}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEE',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {/* Top row: logo + title + rating */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        flexShrink: 0,
                        backgroundColor: product.iconBgColor || '#FFFFFF',
                        overflow: 'hidden',
                        padding: '4px',
                      }}
                    >
                      {product.logoUrl ? (
                        <img
                          src={product.logoUrl}
                          alt={product.brand}
                          style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            borderRadius: '6px',
                          }}
                        />
                      ) : (
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: '14px',
                            color: product.iconTextColor || '#FFFFFF',
                          }}
                        >
                          {product.logoText || product.brand.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          color: '#712CDC',
                        }}
                      >
                        {product.brand}
                      </span>
                      <h3
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#171725',
                          lineHeight: 1.25,
                        }}
                      >
                        {product.title}
                      </h3>
                    </div>
                  </div>
                  {product.rating && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: '#FFFBEB',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        flexShrink: 0,
                      }}
                    >
                      <Star size={11} fill="#F59E0B" color="#F59E0B" />
                      <span
                        style={{ fontSize: '11px', fontWeight: 700, color: '#92400E' }}
                      >
                        {product.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Spec pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '12px',
                  }}
                >
                  {product.specs.slice(0, 3).map((spec, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        color: '#505062',
                        backgroundColor: '#F6F6FA',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontWeight: 500,
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price row */}
                <div
                  style={{
                    paddingTop: '10px',
                    borderTop: '1px solid #F0F0F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: '#712CDC' }}>
                        ₹{product.monthlyEmi.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#8A8A9E' }}>
                        / month
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '2px',
                      }}
                    >
                      <span style={{ fontSize: '11px', color: '#8A8A9E' }}>
                        Price: ₹{product.fullPrice.toLocaleString('en-IN')}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          color: '#10B981',
                          fontWeight: 700,
                          backgroundColor: '#ECFDF5',
                          padding: '1px 6px',
                          borderRadius: '4px',
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct?.(product);
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: '#712CDC',
                      color: '#FFFFFF',
                      boxShadow: '0 2px 6px rgba(113, 44, 220, 0.3)',
                      transition: 'all 0.15s',
                    }}
                  >
                    <span>Apply EMI</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              padding: '48px 16px',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #F0F0F5',
              marginTop: '8px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                margin: '0 auto 12px',
                borderRadius: '9999px',
                backgroundColor: '#F3EBFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#712CDC',
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#171725', marginBottom: '4px' }}>
              No products found
            </h4>
            <p style={{ fontSize: '13px', color: '#8A8A9E' }}>
              Try searching for something else like "iPhone", "Tanishq", "Scooter", or "Gold".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
