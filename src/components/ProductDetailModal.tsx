import { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles, X } from 'lucide-react';
import type { MarketplaceProduct } from '../data/marketplaceData';

interface ProductDetailModalProps {
  product: MarketplaceProduct | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedTenure, setSelectedTenure] = useState<number>(6);

  if (!product) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '24px 20px',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          zIndex: 1000000,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#F3EBFF',
              padding: '4px 10px',
              borderRadius: '9999px',
            }}
          >
            <Sparkles size={13} color="#712CDC" />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#712CDC', textTransform: 'uppercase' }}>
              EMI Details
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              border: 'none',
              backgroundColor: '#F6F6FA',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#6E6E82',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Product Header */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: product.iconBgColor || '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              overflow: 'hidden',
              padding: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
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
                  borderRadius: '8px',
                }}
              />
            ) : (
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '18px',
                  color: product.iconTextColor || '#FFFFFF',
                }}
              >
                {product.logoText || product.brand.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#712CDC', textTransform: 'uppercase' }}>
              {product.brand} • {product.category}
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#171725', lineHeight: 1.2 }}>
              {product.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#6E6E82', marginTop: '2px' }}>
              Total Price: <strong style={{ color: '#171725' }}>₹{product.fullPrice.toLocaleString('en-IN')}</strong>
            </p>
          </div>
        </div>

        {/* No-Cost EMI Highlight Banner */}
        <div
          style={{
            backgroundColor: '#F7F4FD',
            border: '1px solid rgba(113, 44, 220, 0.2)',
            borderRadius: '16px',
            padding: '14px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#712CDC', textTransform: 'uppercase' }}>
              1Fi Mutual Fund EMI
            </span>
            <p style={{ fontSize: '16px', fontWeight: 800, color: '#712CDC', marginTop: '2px' }}>
              ₹{Math.round(product.fullPrice / selectedTenure).toLocaleString('en-IN')}
              <span style={{ fontSize: '12px', fontWeight: 500 }}> / month</span>
            </p>
          </div>
          <div
            style={{
              backgroundColor: '#712CDC',
              color: '#FFFFFF',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            0% Interest
          </div>
        </div>

        {/* Tenure Selector */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: 700, color: '#171725', display: 'block', marginBottom: '8px' }}>
            Select EMI Tenure
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {[3, 6, 12, 24].map((tenure) => {
              const isSel = selectedTenure === tenure;
              return (
                <button
                  key={tenure}
                  onClick={() => setSelectedTenure(tenure)}
                  style={{
                    padding: '10px 4px',
                    borderRadius: '12px',
                    border: isSel ? '2px solid #712CDC' : '1px solid #E2E2EA',
                    backgroundColor: isSel ? '#F3EBFF' : '#FFFFFF',
                    color: isSel ? '#712CDC' : '#505062',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>{tenure} Months</span>
                  <span style={{ fontSize: '10px', fontWeight: 500, marginTop: '2px', color: isSel ? '#712CDC' : '#8A8A9E' }}>
                    ₹{Math.round(product.fullPrice / tenure).toLocaleString('en-IN')}/mo
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specs / Features */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#171725', marginBottom: '8px' }}>
            Highlights & Features
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {product.specs.map((spec, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: '#F6F6FA',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#444456',
                }}
              >
                <Check size={12} color="#712CDC" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1Fi Benefit Callouts */}
        <div
          style={{
            backgroundColor: '#FAFAFD',
            borderRadius: '14px',
            padding: '12px 14px',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#505062' }}>
            <ShieldCheck size={16} color="#712CDC" />
            <span>Zero pre-closure penalty & keep mutual fund growth</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#505062' }}>
            <Sparkles size={16} color="#F59E0B" />
            <span>Instant approval powered by your investments</span>
          </div>
        </div>

        {/* Action CTA Button */}
        <button
          onClick={() => {
            alert(`Order initiated for ${product.title} on ${selectedTenure} months No-Cost EMI!`);
            onClose();
          }}
          style={{
            width: '100%',
            backgroundColor: '#712CDC',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '14px',
            padding: '16px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(113, 44, 220, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span>Avail No-Cost EMI at ₹{Math.round(product.fullPrice / selectedTenure).toLocaleString('en-IN')}/mo</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
