import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div style={{ width: '100%', padding: '0 16px', marginTop: '16px', marginBottom: '12px' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
          backgroundColor: '#FFFFFF',
          borderRadius: '9999px',
          border: '1px solid #E8E8EE',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        }}
      >
        <Search size={18} color="#9E9EA0" style={{ flexShrink: 0 }} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '13.5px',
            color: '#171725',
            fontWeight: 400,
            fontFamily: 'inherit',
          }}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              padding: 0,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={16} color="#9E9EA0" />
          </button>
        )}
      </div>
    </div>
  );
}
