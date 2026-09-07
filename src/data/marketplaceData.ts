export interface MarketplaceProduct {
  id: string;
  title: string;
  brand: string;
  category: string;
  fullPrice: number;
  monthlyEmi: number;
  maxTenureMonths: number;
  badge: string;
  rating: number;
  iconBgColor: string;
  iconTextColor: string;
  logoText: string;
  logoUrl?: string;
  description: string;
  specs: string[];
}

export const marketplaceCategories = [
  "All",
  "Electronics",
  "Gold & Jewellery",
  "EV & Scooters",
  "Travel & Stay",
  "Home & Living",
  "Vouchers",
];

export interface MarketplaceBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  tag: string;
  gradientBg: string;
  brandLogoUrl?: string;
}

export const marketplaceBanners: MarketplaceBanner[] = [
  {
    id: "apple-fest",
    title: "Apple Flagship Fest",
    subtitle: "iPhone 16 Pro & MacBook M3 at 0% Interest EMI backed by Mutual Funds",
    ctaText: "Explore Apple",
    tag: "LIMITED DEAL",
    gradientBg: "linear-gradient(135deg, #111827 0%, #374151 50%, #4B5563 100%)",
    brandLogoUrl: "/logos/apple-reseller.png",
  },
  {
    id: "tanishq-gold",
    title: "Tanishq 24K Gold Coins",
    subtitle: "Lock in gold rate today, pay in 12 easy monthly installments",
    ctaText: "Buy Gold EMI",
    tag: "NO COST EMI",
    gradientBg: "linear-gradient(135deg, #701A75 0%, #A21CAF 50%, #C026D3 100%)",
    brandLogoUrl: "/logos/tanishq-gold-coin.png",
  },
  {
    id: "ola-ev",
    title: "Ola S1 Pro Gen 2 EV",
    subtitle: "Zero down payment, instant portfolio pledge & quick delivery",
    ctaText: "Book Scooter",
    tag: "INSTANT APPROVAL",
    gradientBg: "linear-gradient(135deg, #065F46 0%, #047857 50%, #10B981 100%)",
    brandLogoUrl: "/logos/ola.png",
  },
];

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: "iphone-16-pro",
    title: "Apple iPhone 16 Pro 256GB - Natural Titanium",
    brand: "Apple",
    category: "Electronics",
    fullPrice: 129900,
    monthlyEmi: 5412,
    maxTenureMonths: 24,
    badge: "0% Interest EMI",
    rating: 4.9,
    iconBgColor: "#000000",
    iconTextColor: "#FFFFFF",
    logoText: "",
    logoUrl: "/logos/apple-reseller.png",
    description: "Experience groundbreaking performance with A18 Pro chip, Titanium design, and 4K 120 fps Dolby Vision recording.",
    specs: ["256 GB Storage", "A18 Pro Bionic Chip", "48 MP Camera", '6.3" Super Retina XDR'],
  },
  {
    id: "macbook-air-m3",
    title: 'Apple MacBook Air 15" M3 - Midnight',
    brand: "Apple",
    category: "Electronics",
    fullPrice: 134900,
    monthlyEmi: 5620,
    maxTenureMonths: 24,
    badge: "No Cost EMI",
    rating: 4.8,
    iconBgColor: "#1F2937",
    iconTextColor: "#FFFFFF",
    logoText: " M3",
    logoUrl: "/logos/imagine-apple.png",
    description: "Incredibly thin and fast laptop with M3 chip, up to 18 hours battery life, and liquid Retina display.",
    specs: ["M3 8-core CPU", "16GB Unified Memory", "512GB SSD", '15.3" Liquid Retina'],
  },
  {
    id: "tanishq-gold-coin-10g",
    title: "Tanishq 24K 999.9 Purity 10g Gold Coin",
    brand: "Tanishq",
    category: "Gold & Jewellery",
    fullPrice: 76500,
    monthlyEmi: 6375,
    maxTenureMonths: 12,
    badge: "999.9 Pure Gold",
    rating: 5.0,
    iconBgColor: "#F2A900",
    iconTextColor: "#FFFFFF",
    logoText: "TANISHQ",
    logoUrl: "/logos/tanishq-gold-coin.png",
    description: "Certified 24 Karat Gold Coin from Tanishq with tamper-evident packaging and guaranteed buyback.",
    specs: ["24 Karat (999.9 Purity)", "10 Grams Weight", "BIS Hallmarked", "Tamperproof Vault Box"],
  },
  {
    id: "caratlane-diamond-ring",
    title: "CaratLane 18K Solitaire Diamond Ring",
    brand: "CaratLane",
    category: "Gold & Jewellery",
    fullPrice: 48900,
    monthlyEmi: 4075,
    maxTenureMonths: 12,
    badge: "Certified Diamond",
    rating: 4.7,
    iconBgColor: "#752A80",
    iconTextColor: "#FFFFFF",
    logoText: "CARATLANE",
    logoUrl: "/logos/caratlane.png",
    description: "Elegantly crafted 18K Yellow Gold solitaire ring featuring IGI certified natural diamond.",
    specs: ["18K Yellow Gold", "0.25 Carat Diamond", "IGI Certified", "Lifetime Exchange"],
  },
  {
    id: "ola-s1-pro",
    title: "Ola S1 Pro Gen 2 Electric Scooter (195 km Range)",
    brand: "Ola Electric",
    category: "EV & Scooters",
    fullPrice: 139999,
    monthlyEmi: 3888,
    maxTenureMonths: 36,
    badge: "Zero Down Payment",
    rating: 4.6,
    iconBgColor: "#10B981",
    iconTextColor: "#FFFFFF",
    logoText: "OLA",
    logoUrl: "/logos/ola.png",
    description: "Top-tier electric scooter with 120 km/h top speed, MoveOS 4 features, and hypercharging network support.",
    specs: ["195 km Certified Range", "120 km/h Top Speed", "4 kWh Battery", '7" Touch Display'],
  },
  {
    id: "ather-450x",
    title: "Ather 450X Gen 3 HR Electric Scooter",
    brand: "Ather Energy",
    category: "EV & Scooters",
    fullPrice: 144900,
    monthlyEmi: 4025,
    maxTenureMonths: 36,
    badge: "0% Interest EMI",
    rating: 4.8,
    iconBgColor: "#00D1B2",
    iconTextColor: "#FFFFFF",
    logoText: "ATHER",
    logoUrl: "/logos/ola.png",
    description: "Performance electric scooter engineered with aluminium chassis, Warp mode acceleration, and AutoHold.",
    specs: ["150 km TrueRange", "90 km/h Top Speed", "3.7 kWh Battery Pack", "Google Maps Onboard"],
  },
  {
    id: "makemytrip-voucher-50k",
    title: "MakeMyTrip International Holiday Voucher (₹50,000)",
    brand: "MakeMyTrip",
    category: "Travel & Stay",
    fullPrice: 50000,
    monthlyEmi: 2777,
    maxTenureMonths: 18,
    badge: "Instant Digital Code",
    rating: 4.9,
    iconBgColor: "#E11D48",
    iconTextColor: "#FFFFFF",
    logoText: "MMT",
    logoUrl: "/logos/makemytrip.png",
    description: "Flexible travel gift card valid for flights, luxury hotels, and international vacation packages.",
    specs: ["₹50,000 Voucher Value", "Valid for 12 Months", "Applicable on Flights & Hotels", "Instant Email Delivery"],
  },
  {
    id: "taj-luxury-stay-package",
    title: "Taj Hotels 2-Night Luxury Stay & Spa Experience",
    brand: "Taj",
    category: "Travel & Stay",
    fullPrice: 42000,
    monthlyEmi: 3500,
    maxTenureMonths: 12,
    badge: "5-Star Hospitality",
    rating: 4.9,
    iconBgColor: "#9E7E44",
    iconTextColor: "#FFFFFF",
    logoText: "TAJ",
    logoUrl: "/logos/taj-experiences.png",
    description: "Luxury getaway voucher redeemable across all Taj Palaces, Resorts, and Safaris nationwide.",
    specs: ["2 Nights Stay for Couple", "Complimentary Breakfast & Dinner", "Jiva Spa Credit Included", "Flexi Date Booking"],
  },
  {
    id: "wakefit-ortho-mattress",
    title: "Wakefit Ergo-Tech King Orthopedic Memory Foam Mattress",
    brand: "Wakefit",
    category: "Home & Living",
    fullPrice: 22490,
    monthlyEmi: 1874,
    maxTenureMonths: 12,
    badge: "10 Years Warranty",
    rating: 4.7,
    iconBgColor: "#3F2B96",
    iconTextColor: "#FFFFFF",
    logoText: "wakefit",
    logoUrl: "/logos/wakefit.png",
    description: "Designed with advanced spinal alignment technology and breathable high-resilience foam layers.",
    specs: ["King Size (78x72 inch)", "8 Inch Thickness", "Cooling Gel Foam", "10 Years Manufacturer Warranty"],
  },
  {
    id: "sony-wh1000xm5",
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    category: "Electronics",
    fullPrice: 29990,
    monthlyEmi: 2499,
    maxTenureMonths: 12,
    badge: "Best-in-Class NC",
    rating: 4.8,
    iconBgColor: "#000000",
    iconTextColor: "#FFFFFF",
    logoText: "SONY",
    logoUrl: "/logos/sony.png",
    description: "Industry-leading noise cancelling with two processors and 8 microphones for unparalleled audio purity.",
    specs: ["30 Hours Battery Life", "Auto NC Optimizer", "Speak-to-Chat Tech", "Multipoint Connection"],
  },
];
