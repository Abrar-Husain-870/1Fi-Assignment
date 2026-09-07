import { useState } from 'react';
import ShopHeader from './components/ShopHeader';
import ShopTabs from './components/ShopTabs';
import SearchBar from './components/SearchBar';
import TopBrandsTab from './components/TopBrandsTab';
import NearbyStoresTab from './components/NearbyStoresTab';
import MarketplaceTab from './components/MarketplaceTab';
import BottomNav from './components/BottomNav';
import HomeView from './views/HomeView';
import EmiDuesView from './views/EmiDuesView';
import LimitView from './views/LimitView';
import ProfileView from './views/ProfileView';

export default function App() {
  const [activeShopTab, setActiveShopTab] = useState<string>('top-brands');
  const [activeBottomNav, setActiveBottomNav] = useState<string>('shop');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getSearchPlaceholder = () => {
    switch (activeShopTab) {
      case 'top-brands':
        return 'Search online stores...';
      case 'nearby-stores':
        return 'Search stores...';
      case 'marketplace':
        return 'Search products, electronics, gold...';
      default:
        return 'Search...';
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8F9FD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Mobile Device Simulation Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          minHeight: '100vh',
          backgroundColor: '#F8F9FD',
          position: 'relative',
          boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        {/* Status Bar simulation */}
        <div
          style={{
            height: '24px',
            backgroundColor: activeBottomNav === 'shop' ? '#1A0086' : '#2A0E95',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 600,
            zIndex: 30,
          }}
        >
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Active Navigation Content */}
        <main style={{ flex: 1 }}>
          {activeBottomNav === 'home' && <HomeView />}

          {activeBottomNav === 'shop' && (
            <>
              {/* Header */}
              <ShopHeader />

              {/* Tabs (Top Brands, Nearby Stores, 1Fi Marketplace) */}
              <ShopTabs activeTab={activeShopTab} onTabChange={setActiveShopTab} />

              {/* Search Bar */}
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder={getSearchPlaceholder()}
              />

              {/* Active Tab Content */}
              {activeShopTab === 'top-brands' && (
                <TopBrandsTab searchQuery={searchQuery} />
              )}
              {activeShopTab === 'nearby-stores' && (
                <NearbyStoresTab searchQuery={searchQuery} />
              )}
              {activeShopTab === 'marketplace' && (
                <MarketplaceTab searchQuery={searchQuery} />
              )}
            </>
          )}

          {activeBottomNav === 'emidues' && <EmiDuesView />}
          {activeBottomNav === 'limit' && <LimitView />}
          {activeBottomNav === 'profile' && <ProfileView />}
        </main>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeBottomNav} onTabChange={setActiveBottomNav} />
      </div>
    </div>
  );
}
