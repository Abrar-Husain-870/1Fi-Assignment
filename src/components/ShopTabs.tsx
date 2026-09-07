interface ShopTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'top-brands', label: 'Top Brands' },
  { id: 'nearby-stores', label: 'Nearby Stores' },
  { id: 'marketplace', label: '1Fi Marketplace' },
];

export default function ShopTabs({ activeTab, onTabChange }: ShopTabsProps) {
  return (
    <div style={{ width: '100%', padding: '0 16px', marginTop: '-22px', position: 'relative', zIndex: 20 }}>
      <div
        style={{
          width: '100%',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#F0EDF8',
          borderRadius: '9999px',
          border: '1px solid rgba(113, 44, 220, 0.10)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                flex: 1,
                padding: '12px 6px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                borderRadius: '9999px',
                boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.08)' : 'none',
                transition: 'all 0.18s ease',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#712CDC' : '#6E6E82',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </span>
              {isActive && (
                <div
                  style={{
                    width: '28px',
                    height: '3px',
                    backgroundColor: '#712CDC',
                    borderRadius: '9999px',
                    marginTop: '3px',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
