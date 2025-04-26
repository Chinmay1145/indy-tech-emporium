
import { Product, ProductCategory } from "@/types";

export const products: Product[] = [
  // Laptops
  {
    id: "laptop-001",
    name: "ProBook X5",
    price: 89999,
    category: "laptop",
    description: "Powerful laptop for professionals with high-performance specs",
    features: [
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "15.6-inch 4K Display",
      "NVIDIA GeForce RTX 3060",
      "Backlit Keyboard"
    ],
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600"
    ],
    brand: "TechMaster",
    rating: 4.8,
    stock: 15
  },
  {
    id: "laptop-002",
    name: "UltraSlim 7",
    price: 64999,
    category: "laptop",
    description: "Slim and lightweight laptop for everyday use",
    features: [
      "Intel Core i5 Processor",
      "8GB RAM",
      "256GB SSD",
      "14-inch Full HD Display",
      "Intel Iris Xe Graphics",
      "Fingerprint Reader"
    ],
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600",
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=600"
    ],
    brand: "LightTech",
    rating: 4.5,
    stock: 22
  },
  {
    id: "laptop-003",
    name: "GamePro X",
    price: 124999,
    category: "laptop",
    description: "High-performance gaming laptop with advanced cooling",
    features: [
      "Intel Core i9 Processor",
      "32GB RAM",
      "1TB SSD",
      "17.3-inch 165Hz Display",
      "NVIDIA GeForce RTX 4070",
      "RGB Keyboard"
    ],
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600"
    ],
    brand: "GameEdge",
    rating: 4.9,
    stock: 10
  },
  {
    id: "laptop-004",
    name: "BusinessBook Pro",
    price: 78499,
    category: "laptop",
    description: "Reliable business laptop with enhanced security features",
    features: [
      "Intel Core i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "14-inch QHD Display",
      "Intel Iris Xe Graphics",
      "Fingerprint & Face Recognition"
    ],
    images: [
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=600",
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=600"
    ],
    brand: "BusinessPro",
    rating: 4.6,
    stock: 18
  },
  {
    id: "laptop-005",
    name: "CreatorPro 15",
    price: 134999,
    category: "laptop",
    description: "Designed for creative professionals with color accurate display",
    features: [
      "AMD Ryzen 9 Processor",
      "32GB RAM",
      "1TB SSD",
      "15.6-inch 4K OLED Display",
      "NVIDIA GeForce RTX 3080",
      "SD Card Reader"
    ],
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
    ],
    brand: "CreativeTech",
    rating: 4.9,
    stock: 8
  },
  {
    id: "laptop-006",
    name: "EssentialBook",
    price: 38999,
    category: "laptop",
    description: "Budget-friendly laptop for students and basic tasks",
    features: [
      "Intel Core i3 Processor",
      "8GB RAM",
      "256GB SSD",
      "14-inch HD Display",
      "Intel UHD Graphics",
      "Long Battery Life"
    ],
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=600"
    ],
    brand: "EssenTech",
    rating: 4.3,
    stock: 25
  },
  {
    id: "laptop-007",
    name: "ConvertiblePro",
    price: 72999,
    category: "laptop",
    description: "2-in-1 convertible laptop with touchscreen and stylus support",
    features: [
      "Intel Core i5 Processor",
      "16GB RAM",
      "512GB SSD",
      "13.3-inch Touchscreen",
      "Intel Iris Xe Graphics",
      "360-degree Hinge"
    ],
    images: [
      "https://images.unsplash.com/photo-1504707748692-419802cf939d?q=80&w=600",
      "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=600"
    ],
    brand: "FlexiTech",
    rating: 4.5,
    stock: 14
  },
  // Smartphones
  {
    id: "smartphone-001",
    name: "PhoneX Pro",
    price: 94999,
    category: "smartphone",
    description: "Flagship smartphone with cutting-edge technology",
    features: [
      "6.7-inch OLED Display",
      "Snapdragon 8 Gen 2",
      "12GB RAM",
      "256GB Storage",
      "108MP Triple Camera",
      "5000mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=600"
    ],
    brand: "MobiTech",
    rating: 4.9,
    stock: 20
  },
  {
    id: "smartphone-002",
    name: "EssentialPhone",
    price: 24999,
    category: "smartphone",
    description: "Mid-range smartphone with great value",
    features: [
      "6.4-inch LCD Display",
      "MediaTek Dimensity 900",
      "6GB RAM",
      "128GB Storage",
      "64MP Dual Camera",
      "4500mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600",
      "https://images.unsplash.com/photo-1554672408-730436c60dde?q=80&w=600"
    ],
    brand: "ValueTech",
    rating: 4.5,
    stock: 30
  },
  {
    id: "smartphone-003",
    name: "UltraPhone Mini",
    price: 69999,
    category: "smartphone",
    description: "Compact flagship with premium features",
    features: [
      "5.8-inch AMOLED Display",
      "Snapdragon 8+ Gen 1",
      "8GB RAM",
      "256GB Storage",
      "50MP Triple Camera",
      "4000mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=600",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600"
    ],
    brand: "MobiTech",
    rating: 4.7,
    stock: 15
  },
  {
    id: "smartphone-004",
    name: "PowerPhone Max",
    price: 54999,
    category: "smartphone",
    description: "Smartphone with large display and exceptional battery life",
    features: [
      "6.9-inch LCD Display",
      "MediaTek Dimensity 9000",
      "8GB RAM",
      "128GB Storage",
      "64MP Quad Camera",
      "7000mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=600"
    ],
    brand: "PowerTech",
    rating: 4.6,
    stock: 22
  },
  {
    id: "smartphone-005",
    name: "CameraPhone Ultra",
    price: 84999,
    category: "smartphone",
    description: "Photography-focused smartphone with advanced camera system",
    features: [
      "6.5-inch AMOLED Display",
      "Snapdragon 8 Gen 2",
      "12GB RAM",
      "512GB Storage",
      "200MP Periscope Camera",
      "5000mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=600",
      "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=600"
    ],
    brand: "PixelTech",
    rating: 4.9,
    stock: 12
  },
  {
    id: "smartphone-006",
    name: "BudgetPhone",
    price: 12999,
    category: "smartphone",
    description: "Affordable smartphone with essential features",
    features: [
      "6.1-inch LCD Display",
      "MediaTek Helio G85",
      "4GB RAM",
      "64GB Storage",
      "48MP Dual Camera",
      "4000mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=600",
      "https://images.unsplash.com/photo-1623658630972-d493d9d9e10e?q=80&w=600"
    ],
    brand: "EconoTech",
    rating: 4.2,
    stock: 35
  },
  {
    id: "smartphone-007",
    name: "FoldTech X",
    price: 149999,
    category: "smartphone",
    description: "Innovative folding smartphone with dual displays",
    features: [
      "7.6-inch Foldable OLED Display",
      "Snapdragon 8 Gen 2",
      "12GB RAM",
      "512GB Storage",
      "50MP Triple Camera",
      "4400mAh Battery"
    ],
    images: [
      "https://images.unsplash.com/photo-1677442135136-18f58aba0e71?q=80&w=600",
      "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=600"
    ],
    brand: "FoldTech",
    rating: 4.8,
    stock: 8
  },
  // Watches
  {
    id: "watch-001",
    name: "SmartWatch Pro",
    price: 32999,
    category: "watch",
    description: "Advanced smartwatch with comprehensive health tracking",
    features: [
      "1.4-inch AMOLED Display",
      "Heart Rate & ECG",
      "GPS & Fitness Tracking",
      "5 ATM Water Resistance",
      "7-day Battery Life",
      "Cellular Connectivity"
    ],
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600"
    ],
    brand: "WearTech",
    rating: 4.8,
    stock: 25
  },
  {
    id: "watch-002",
    name: "FitnessWatch",
    price: 18999,
    category: "watch",
    description: "Fitness-oriented smartwatch with advanced tracking features",
    features: [
      "1.3-inch LCD Display",
      "Heart Rate Monitor",
      "GPS & Activity Tracking",
      "3 ATM Water Resistance",
      "14-day Battery Life",
      "Sleep Tracking"
    ],
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=600",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=600"
    ],
    brand: "FitTech",
    rating: 4.6,
    stock: 30
  },
  {
    id: "watch-003",
    name: "ClassicWatch",
    price: 9999,
    category: "watch",
    description: "Affordable smartwatch with essential features",
    features: [
      "1.2-inch TFT Display",
      "Heart Rate Monitor",
      "Activity Tracking",
      "IP68 Water Resistance",
      "7-day Battery Life",
      "Notifications"
    ],
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600"
    ],
    brand: "EssentialTech",
    rating: 4.3,
    stock: 40
  },
  {
    id: "watch-004",
    name: "UltraWatch Elite",
    price: 45999,
    category: "watch",
    description: "Premium smartwatch with titanium build and exclusive features",
    features: [
      "1.5-inch AMOLED Display",
      "Advanced Health Metrics",
      "Multi-band GPS",
      "10 ATM Water Resistance",
      "10-day Battery Life",
      "Titanium Case"
    ],
    images: [
      "https://images.unsplash.com/photo-1548359638-e51353ca6d34?q=80&w=600",
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=600"
    ],
    brand: "UltraTech",
    rating: 4.9,
    stock: 15
  },
  {
    id: "watch-005",
    name: "KidsWatch",
    price: 4999,
    category: "watch",
    description: "Smartwatch designed for children with tracking and safety features",
    features: [
      "1.0-inch LCD Display",
      "GPS Tracking",
      "SOS Button",
      "IP67 Water Resistance",
      "3-day Battery Life",
      "Call Function"
    ],
    images: [
      "https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?q=80&w=600",
      "https://images.unsplash.com/photo-1616353329128-2001139ab58c?q=80&w=600"
    ],
    brand: "KidTech",
    rating: 4.4,
    stock: 20
  },
  {
    id: "watch-006",
    name: "ClassicChronograph",
    price: 24999,
    category: "watch",
    description: "Traditional analog watch with chronograph functionality",
    features: [
      "44mm Stainless Steel Case",
      "Sapphire Crystal",
      "Chronograph Movement",
      "5 ATM Water Resistance",
      "Date Display",
      "Leather Strap"
    ],
    images: [
      "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=600",
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=600"
    ],
    brand: "TimeKeeper",
    rating: 4.7,
    stock: 18
  },
  // Headphones
  {
    id: "headphone-001",
    name: "NoiseCancel Pro",
    price: 27999,
    category: "headphone",
    description: "Premium over-ear headphones with advanced noise cancellation",
    features: [
      "Active Noise Cancellation",
      "40mm Dynamic Drivers",
      "30-hour Battery Life",
      "Bluetooth 5.2",
      "Comfortable Over-ear Design",
      "Touch Controls"
    ],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600"
    ],
    brand: "AudioTech",
    rating: 4.8,
    stock: 20
  },
  {
    id: "headphone-002",
    name: "BassPro X",
    price: 16999,
    category: "headphone",
    description: "Bass-heavy over-ear headphones for immersive music experience",
    features: [
      "Enhanced Bass Technology",
      "50mm Drivers",
      "24-hour Battery Life",
      "Bluetooth 5.0",
      "Foldable Design",
      "Built-in Microphone"
    ],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600",
      "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=600"
    ],
    brand: "BassMaster",
    rating: 4.6,
    stock: 25
  },
  {
    id: "headphone-003",
    name: "StudioPro",
    price: 32999,
    category: "headphone",
    description: "Studio-quality headphones for professionals",
    features: [
      "Reference Studio Sound",
      "45mm Planar Magnetic Drivers",
      "Wired Connection",
      "Detachable Cable",
      "Memory Foam Earpads",
      "Robust Metal Construction"
    ],
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=600",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=600"
    ],
    brand: "StudioSound",
    rating: 4.9,
    stock: 15
  },
  {
    id: "headphone-004",
    name: "GamingHeadset X",
    price: 11999,
    category: "headphone",
    description: "Gaming headset with spatial audio and RGB lighting",
    features: [
      "7.1 Surround Sound",
      "50mm Drivers",
      "RGB Lighting Effects",
      "Noise-canceling Microphone",
      "Memory Foam Earpads",
      "Multi-platform Compatibility"
    ],
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f8?q=80&w=600"
    ],
    brand: "GameAudio",
    rating: 4.7,
    stock: 30
  },
  {
    id: "headphone-005",
    name: "EssentialWireless",
    price: 6999,
    category: "headphone",
    description: "Budget-friendly wireless headphones",
    features: [
      "40mm Drivers",
      "20-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Adjustable Headband",
      "Foldable Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=600",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600"
    ],
    brand: "BasicSound",
    rating: 4.3,
    stock: 35
  },
  // Earbuds
  {
    id: "earbud-001",
    name: "TrueWireless Pro",
    price: 18999,
    category: "earbud",
    description: "Premium true wireless earbuds with excellent sound quality",
    features: [
      "Active Noise Cancellation",
      "8mm Dynamic Drivers",
      "8-hour Battery Life (30 with Case)",
      "Bluetooth 5.2",
      "IPX5 Water Resistance",
      "Wireless Charging Case"
    ],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600",
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5e898?q=80&w=600"
    ],
    brand: "AudioTech",
    rating: 4.8,
    stock: 25
  },
  {
    id: "earbud-002",
    name: "SportBuds",
    price: 9999,
    category: "earbud",
    description: "Wireless earbuds designed for sports and active lifestyles",
    features: [
      "Secure Ear Hook Design",
      "10mm Drivers",
      "9-hour Battery Life (24 with Case)",
      "Bluetooth 5.0",
      "IP67 Water & Dust Resistance",
      "Quick Charge"
    ],
    images: [
      "https://images.unsplash.com/photo-1588423566159-a6c6286cd467?q=80&w=600",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600"
    ],
    brand: "SportSound",
    rating: 4.6,
    stock: 30
  },
  {
    id: "earbud-003",
    name: "BassHeads Mini",
    price: 6999,
    category: "earbud",
    description: "Compact earbuds with powerful bass",
    features: [
      "Bass-Enhancing Design",
      "12mm Drivers",
      "6-hour Battery Life (18 with Case)",
      "Bluetooth 5.0",
      "IPX4 Water Resistance",
      "Touch Controls"
    ],
    images: [
      "https://images.unsplash.com/photo-1601370552761-83ee94d42c86?q=80&w=600",
      "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=600"
    ],
    brand: "BassMaster",
    rating: 4.4,
    stock: 35
  },
  {
    id: "earbud-004",
    name: "UltraSound TWS",
    price: 24999,
    category: "earbud",
    description: "High-end true wireless earbuds with premium features",
    features: [
      "Hybrid Active Noise Cancellation",
      "Dual Drivers",
      "10-hour Battery Life (36 with Case)",
      "Bluetooth 5.3",
      "IPX6 Water Resistance",
      "Adaptive EQ"
    ],
    images: [
      "https://images.unsplash.com/photo-1630080644615-0b156aa6d220?q=80&w=600",
      "https://images.unsplash.com/photo-1649877845895-9e3ca2da4a8f?q=80&w=600"
    ],
    brand: "UltraSound",
    rating: 4.9,
    stock: 20
  },
  {
    id: "earbud-005",
    name: "BasicBuds",
    price: 2999,
    category: "earbud",
    description: "Budget-friendly wireless earbuds for everyday use",
    features: [
      "10mm Drivers",
      "4-hour Battery Life (12 with Case)",
      "Bluetooth 5.0",
      "IPX4 Water Resistance",
      "Button Controls",
      "Compact Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1607592241183-1ff4b31ad0e8?q=80&w=600",
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d0b?q=80&w=600"
    ],
    brand: "BasicSound",
    rating: 4.1,
    stock: 40
  }
];

export const getProducts = (category?: ProductCategory): Product[] => {
  if (category) {
    return products.filter(product => product.category === category);
  }
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return products
    .filter(p => p.rating >= 4.5)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
