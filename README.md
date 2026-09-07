# 1Fi Mobile App & Marketplace UI

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Lucide Icons](https://img.shields.io/badge/Icons-Lucide--React-orange.svg)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, mobile-first financial & e-commerce marketplace web application designed for **1Fi**. This application enables users to pledge collateral (such as Mutual Funds or Fixed Deposits) to unlock instant credit limits and shop for high-value items across top brands, local stores, and digital asset categories using zero-cost or low-interest EMI plans.

---

## 📱 App Preview & Highlights

The interface is built as a responsive mobile shell complete with realistic status bar indicators, header navigation, tab views, modal dialogs, dynamic search filters, and interactive EMI calculators.

```
┌─────────────────────────────────────────────────────────┐
│ [9:41]                                          5G 100% │
├─────────────────────────────────────────────────────────┤
│  1Fi Shop Hub                                   [Limit] │
│  Pledged Limit: ₹2,50,000 | Available: ₹1,85,000        │
├─────────────────────────────────────────────────────────┤
│  [Top Brands]   |   [Nearby Stores]   |   [1Fi Marketplace] │
├─────────────────────────────────────────────────────────┤
│  🔍 Search products, electronics, gold...               │
├─────────────────────────────────────────────────────────┤
│  • Category Pill Filters (Electronics, Gold, EV...)    │
│  • Interactive Promotional Banners                      │
│  • Product Cards with Monthly EMI Breakdown             │
│  • Comprehensive EMI Calculator & Checkout Modal        │
├─────────────────────────────────────────────────────────┤
│ [🏠 Home]  [🛒 Shop]  [💳 EMI Dues]  [⚡ Limit]  [👤 Profile]│
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### 🛍️ 1. Shop Hub (`/shop`)

- **1Fi Marketplace**:
  - **Product Catalog**: Explore premium products including Apple devices, 24K Tanishq Gold Coins, Ola Electric Scooters, Luxury Travel Vouchers, Sony Audio, and Home Comfort products.
  - **Category Pills**: Instant multi-category filtering (Electronics, Gold & Jewellery, EV & Scooters, Travel & Stay, Home & Living, Vouchers) with real-time product count badges.
  - **Dynamic Search**: Instant keyword search across title, brand name, and category.
  - **Interactive EMI Modal**:
    - Select custom tenure options (3, 6, 9, 12, 18, 24, 36 months).
    - Real-time monthly installment recalculation.
    - Zero-cost interest breakdown vs standard bank processing.
    - Full technical specifications list & stock status indicators.
    - Credit balance pledge validation.

- **Top Brands Tab**:
  - Direct access to partner store vouchers (Amazon, Flipkart, Myntra, Croma, Nykaa, Reliance Digital).
  - Cashback & instant voucher discount highlights.

- **Nearby Stores Tab**:
  - Physical partner store locator with distance filtering (Within 2km, 5km, 10km).
  - Category filters for physical offline shopping.
  - Integrated direction links, phone call triggers, and interactive map preview simulation.

---

### 💳 2. Financial Management Views

- **🏠 Home View (`/home`)**:
  - Credit overview showing total portfolio value pledged vs unlocked limit.
  - Quick action bar: Pay EMI, Withdraw Cash, Buy 24K Gold, Top up collateral.
  - Active Loan status cards and recent transaction history.

- **📊 EMI Dues View (`/emidues`)**:
  - Monthly EMI calendar breakdown.
  - Instant manual pay trigger and auto-debit bank mandate status.
  - Past payment receipts and breakdown.

- **⚡ Credit Limit View (`/limit`)**:
  - Granular collateral portfolio breakdown (Equity Mutual Funds, Debt Mutual Funds, FDs).
  - Loan-to-Value (LTV) ratio indicators.
  - One-tap portfolio re-evaluation to boost available limit.

- **👤 Profile View (`/profile`)**:
  - User verification status (KYC verified badge).
  - Linked primary bank accounts & NACH auto-debit mandates.
  - Security settings, PIN management, and 24/7 customer support access.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling Strategy**: Pure Vanilla CSS (`index.css`) + Inline Dynamic CSS Tokens (Zero heavyweight CSS framework dependencies for maximum performance)
- **Design Aesthetic**: Modern Glassmorphism & Mobile App Frame with curated gradients (`#1A0086` Deep Indigo, `#6200EE` Electric Purple, `#F8F9FD` Surface Gray)

---

## 📂 Project Structure

```
1Fi-Assignment/
├── index.html                # HTML entry point with Inter & Font integrations
├── package.json              # Project dependencies & script definitions
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── public/                   # Public static assets & brand logos
└── src/
    ├── main.tsx              # React DOM render entry point
    ├── App.tsx               # App root shell with view router & simulated status bar
    ├── index.css             # Global CSS variables, animations & utilities
    ├── components/           # Reusable UI Components
    │   ├── BottomNav.tsx     # Mobile sticky bottom navigation bar
    │   ├── ShopHeader.tsx    # Credit limit balance header bar
    │   ├── ShopTabs.tsx      # Top tab navigation (Brands / Nearby / Marketplace)
    │   ├── SearchBar.tsx     # Context-aware animated search input
    │   ├── MarketplaceTab.tsx# Marketplace grid & category pill UI
    │   ├── TopBrandsTab.tsx  # Brand partners grid UI
    │   ├── NearbyStoresTab.tsx# Offline store locator UI
    │   └── ProductDetailModal.tsx # Product details & interactive EMI calculator
    ├── views/                # Full Screen Views
    │   ├── HomeView.tsx      # Portfolio summary & quick actions
    │   ├── EmiDuesView.tsx   # Upcoming EMI payment tracker
    │   ├── LimitView.tsx     # Pledged collateral & LTV details
    │   └── ProfileView.tsx   # User settings & KYC status
    └── data/                 # Mock Data Models & Interfaces
        ├── marketplaceData.ts# Products, categories & banner data
        └── shopData.ts       # Brands & nearby store data
```

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.x` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.x` or higher (comes bundled with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abrar-Husain-870/1Fi-Assignment.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd 1Fi-Assignment
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server with hot module reloading (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the app.

---

## 📦 Build & Deployment

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally before deployment:

```bash
npm run preview
```

The output files will be generated in the `dist/` directory, ready to be hosted on services like Vercel, Netlify, or GitHub Pages.

---

## 🎨 Design Highlights

- **Mobile Shell Simulator**: On desktop screens, the application renders inside a sleek `480px` centered mobile viewport with soft dropshadows to replicate an authentic mobile app experience.
- **Dynamic Micro-Interactions**: Hover animations, scale effects on product cards, animated category pills, and smooth modal slide-ups.
- **Accessible & Clean**: High contrast ratios, standard touch targets (44px+), and semantic HTML elements.

---

## 📄 License

This project is developed as part of the **1Fi Assignment**. All rights reserved.
