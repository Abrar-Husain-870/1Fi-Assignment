import { Home, Store, TrendingUp, User } from 'lucide-react';
// Custom EMI Dues icon matching the 1Fi design
const EmiDuesIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M12 9v6" />
    <path d="M9 12h6" />
    <path d="M6 4v-2" />
    <path d="M18 4v-2" />
  </svg>
);

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'shop', label: 'Shop', icon: Store },
  { id: 'emidues', label: 'EMI Dues', icon: null },
  { id: 'limit', label: 'Limit', icon: TrendingUp },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        maxWidth: '480px',
        margin: '0 auto',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F0F0F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '6px 8px',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)',
      }}
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            style={{
              flex: 1,
              padding: '6px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
            }}
          >
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '28px',
                  height: '2px',
                  backgroundColor: '#712CDC',
                  borderRadius: '9999px',
                }}
              />
            )}
            <div
              style={{
                marginBottom: '4px',
                color: isActive ? '#712CDC' : '#8A8A9E',
                transition: 'color 0.15s',
              }}
            >
              {IconComponent ? (
                <IconComponent size={20} />
              ) : (
                <EmiDuesIcon size={20} />
              )}
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#712CDC' : '#8A8A9E',
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
