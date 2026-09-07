export interface Brand {
  id: string;
  name: string;
  subtext: string;
  bgColor: string;
  textColor: string;
  logoText: string;
  logoUrl: string;
}

export const topBrandsData: Brand[] = [
  { id: "air-india", name: "Air India", subtext: "No-cost EMIs upto 18 months", bgColor: "#E30613", textColor: "#FFFFFF", logoText: "AIR INDIA", logoUrl: "/assets/brands/air-india.png" },
  { id: "apple-reseller", name: "Apple Premium Reseller", subtext: "No-cost EMIs upto 24 months", bgColor: "#000000", textColor: "#FFFFFF", logoText: "⬛ Premium Reseller", logoUrl: "/assets/brands/apple-reseller.png" },
  { id: "caratlane", name: "CaratLane", subtext: "No-cost EMIs upto 6 months", bgColor: "#752A80", textColor: "#FFFFFF", logoText: "CARATLANE", logoUrl: "/assets/brands/caratlane.png" },
  { id: "cgh-earth", name: "CGH Earth", subtext: "No-cost EMIs upto 24 months", bgColor: "#F5F5F0", textColor: "#2D3748", logoText: "cgh earth", logoUrl: "/assets/brands/cgh-earth.png" },
  { id: "croma", name: "Croma", subtext: "No-cost EMIs upto 6 months", bgColor: "#00B5B5", textColor: "#FFFFFF", logoText: "cromā", logoUrl: "/assets/brands/croma.png" },
  { id: "easemytrip-holiday", name: "EaseMyTrip Holiday", subtext: "No-cost EMIs upto 24 months", bgColor: "#0066B2", textColor: "#FFFFFF", logoText: "EaseMyTrip", logoUrl: "/assets/brands/easemytrip-holiday.png" },
  { id: "easemytrip-hotel", name: "EaseMyTrip Hotel", subtext: "No-cost EMIs upto 24 months", bgColor: "#00529B", textColor: "#FFFFFF", logoText: "EaseMyTrip", logoUrl: "/assets/brands/easemytrip-hotel.png" },
  { id: "giva", name: "Giva", subtext: "No-cost EMIs upto 36 months", bgColor: "#FADADD", textColor: "#800020", logoText: "GIVA", logoUrl: "/assets/brands/giva.png" },
  { id: "giva-voucher", name: "Giva Gold Voucher", subtext: "No-cost EMIs upto 12 months", bgColor: "#F3E5AB", textColor: "#704214", logoText: "GIVA", logoUrl: "/assets/brands/giva-voucher.png" },
  { id: "goibibo", name: "Goibibo", subtext: "No-cost EMIs upto 18 months", bgColor: "#EC6724", textColor: "#FFFFFF", logoText: "goibibo", logoUrl: "/assets/brands/goibibo.png" },
  { id: "goibibo-hotel", name: "Goibibo Hotel", subtext: "No-cost EMIs upto 36 months", bgColor: "#3A506B", textColor: "#FFFFFF", logoText: "goibibo", logoUrl: "/assets/brands/goibibo-hotel.png" },
  { id: "helios", name: "Helios", subtext: "No-cost EMIs upto 24 months", bgColor: "#111111", textColor: "#FFFFFF", logoText: "HELIOS", logoUrl: "/assets/brands/helios.png" },
  { id: "imagine-apple", name: "Imagine Apple Premium", subtext: "No-cost EMIs upto 6 months", bgColor: "#0A0A0A", textColor: "#FFFFFF", logoText: "imagine ⬛", logoUrl: "/assets/brands/imagine-apple.png" },
  { id: "jos-alukkas", name: "Jos Alukkas Jewellery", subtext: "No-cost EMIs upto 9 months", bgColor: "#5C1D24", textColor: "#FFFFFF", logoText: "JOS ALUKKAS", logoUrl: "/assets/brands/jos-alukkas.png" },
  { id: "joyalukkas", name: "Joyalukkas", subtext: "No-cost EMIs upto 12 months", bgColor: "#800000", textColor: "#FFFFFF", logoText: "Joyalukkas", logoUrl: "/assets/brands/joyalukkas.png" },
  { id: "taj-experiences", name: "Taj Experiences", subtext: "No-cost EMIs upto 24 months", bgColor: "#9E7E44", textColor: "#FFFFFF", logoText: "TAJ", logoUrl: "/assets/brands/taj-experiences.png" },
  { id: "taj-spa", name: "Taj Spa", subtext: "No-cost EMIs upto 24 months", bgColor: "#3D3118", textColor: "#FFFFFF", logoText: "TAJ", logoUrl: "/assets/brands/taj-spa.png" },
  { id: "tanishq", name: "Tanishq", subtext: "No-cost EMIs upto 9 months", bgColor: "#FDF3DF", textColor: "#5C2D16", logoText: "TANISHQ", logoUrl: "/assets/brands/tanishq.png" },
  { id: "tanishq-gold-coin", name: "Tanishq Gold Coin", subtext: "No-cost EMIs upto 6 months", bgColor: "#F2A900", textColor: "#FFFFFF", logoText: "TANISHQ", logoUrl: "/assets/brands/tanishq-gold-coin.png" },
  { id: "tanishq-studded", name: "Tanishq Studded", subtext: "No-cost EMIs upto 12 months", bgColor: "#7A1C59", textColor: "#FFFFFF", logoText: "TANISHQ", logoUrl: "/assets/brands/tanishq-studded.png" },
  { id: "vijay-sales", name: "Vijay Sales", subtext: "No-cost EMIs upto 6 months", bgColor: "#E31E24", textColor: "#FFFFFF", logoText: "vijay sales", logoUrl: "/assets/brands/vijay-sales.png" },
  { id: "wakefit", name: "Wakefit", subtext: "No-cost EMIs upto 12 months", bgColor: "#3F2B96", textColor: "#FFFFFF", logoText: "wakefit", logoUrl: "/assets/brands/wakefit.png" },
  { id: "world-of-titan", name: "World of Titan", subtext: "No-cost EMIs upto 24 months", bgColor: "#8FE3D9", textColor: "#0B4F48", logoText: "TITAN", logoUrl: "/assets/brands/world-of-titan.png" },
];

export interface NearbyStore {
  id: string;
  name: string;
  address: string;
  distance: string;
  logoText: string;
  bgColor: string;
  textColor: string;
  logoUrl: string;
}

export const nearbyStoresData: NearbyStore[] = [
  { id: "tripbouquet", name: "TripBouquet", address: "241, Tower B, Spazedge, near Dmart, Gurugram, Haryana, 122018", distance: "426 KM", logoText: "TripBouquet", bgColor: "#FFFFFF", textColor: "#DC2626", logoUrl: "/assets/brands/tripbouquet.png" },
  { id: "atelier", name: "Atelier Forbidden Jour...", address: "Sector 40, Gurugram, Haryana, 122001", distance: "427 KM", logoText: "❖", bgColor: "#FEF3C7", textColor: "#D97706", logoUrl: "/assets/brands/atelier.png" },
  { id: "charger-on-wheels", name: "Charger On Wheels", address: "Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101", distance: "427 KM", logoText: "CHARGER ON WHEELS", bgColor: "#111827", textColor: "#10B981", logoUrl: "/assets/brands/charger-on-wheels.png" },
  { id: "ashoka-suzuki", name: "Ashoka Suzuki", address: "Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001", distance: "427 KM", logoText: "SUZUKI", bgColor: "#FFFFFF", textColor: "#E11D48", logoUrl: "/assets/brands/ashoka-suzuki.png" },
  { id: "pacholi-rajiv", name: "Pacholi Suzuki Rajiv C...", address: "6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001", distance: "429 KM", logoText: "SUZUKI", bgColor: "#FFFFFF", textColor: "#E11D48", logoUrl: "/assets/brands/pacholi-rajiv.png" },
  { id: "pacholi-railway", name: "Pacholi Suzuki Railway...", address: "64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001", distance: "430 KM", logoText: "SUZUKI", bgColor: "#FFFFFF", textColor: "#E11D48", logoUrl: "/assets/brands/pacholi-railway.png" },
  { id: "malwa-honda", name: "Malwa Honda Khandsa ...", address: "60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001", distance: "430 KM", logoText: "HONDA", bgColor: "#FFFFFF", textColor: "#DC2626", logoUrl: "/assets/brands/malwa-honda.png" },
  { id: "pacholi-hayatpur", name: "Pacholi Suzuki Hayatpur", address: "RAKBA 12, KANAL 11, MARLA 0, Hayatpur, SARSAI, Gurugram, Haryana, 122001", distance: "436 KM", logoText: "SUZUKI", bgColor: "#FFFFFF", textColor: "#E11D48", logoUrl: "/assets/brands/pacholi-hayatpur.png" },
];
