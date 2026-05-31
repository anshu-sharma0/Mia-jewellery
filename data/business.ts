export interface LinkItem {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "twitter" | "facebook";
  url: string;
  ariaLabel: string;
}

export interface BusinessTestimonial {
  id: string;
  name: string;
  date: string;
  text: string;
}

export interface BusinessData {
  company: {
    name: string;
    shortName: string;
    subBrand: string;
    logo: {
      primaryText: string;
      secondaryText: string;
    };
    parentCompany: string;
    productLabel: string;
    tagline: string;
    aboutUs: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    whatsapp: string;
    supportLinks: LinkItem[];
  };
  socialLinks: SocialLink[];
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    storesNationwide: string;
  };
  services: {
    jewelleryLinks: string[];
    collectionLinks: string[];
    infoLinks: LinkItem[];
    trendingLinks: LinkItem[];
    customerServiceLinks: LinkItem[];
    navCategories: LinkItem[];
    promises: Array<{
      icon: string;
      title: string;
      subtitle: string;
      color: string;
    }>;
    announcementPromos: string[];
    giftingOccasions: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      type: "website";
    };
  };
  businessHours: {
    timezone: string;
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  team: Array<{
    name: string;
    role: string;
  }>;
  legal: {
    copyrightText: string;
  };
  products: {
    heroSlides: Array<{
      id: number;
      title: string;
      subtitle: string;
      cta: string;
      gradient: string;
      textColor: string;
      badge: string;
    }>;
  };
  testimonials: BusinessTestimonial[];
  footer: {
    appDownloadTitle: string;
    appDownloadSubtitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    currencyOptions: string[];
    paymentMethods: string[];
  };
  storeLocator: {
    storeLabel: string;
    title: string;
    subtitleTop: string;
    subtitleBottom: string;
    cta: string;
  };
}

export const businessData: BusinessData = {
  company: {
    name: "Mia by Tanishq",
    shortName: "Mia",
    subBrand: "by TANISHQ",
    logo: {
      primaryText: "Mia",
      secondaryText: "by TANISHQ",
    },
    parentCompany: "TATA",
    productLabel: "A TATA PRODUCT",
    tagline: "Fine Jewellery for Every Moment",
    aboutUs:
      "Not specified in current website content.",
  },
  contact: {
    primaryPhone: "1800-266-0123",
    secondaryPhone: "+91 81473 49478",
    email: "Not specified",
    whatsapp: "+91 81473 49478",
    supportLinks: [
      { title: "Write to Us", href: "#" },
      { title: "Chat with us", href: "#" },
      { title: "WhatsApp Chat", href: "#" },
    ],
  },
  socialLinks: [
    { platform: "instagram", url: "#", ariaLabel: "Instagram" },
    { platform: "twitter", url: "#", ariaLabel: "Twitter" },
    { platform: "facebook", url: "#", ariaLabel: "Facebook" },
  ],
  address: {
    line1: "Mia by Tanishq",
    line2: "200+ Stores Nationwide",
    city: "Not specified",
    state: "Not specified",
    postalCode: "Not specified",
    country: "Not specified",
    storesNationwide: "200+ Mia Stores Nationwide",
  },
  services: {
    jewelleryLinks: [
      "Rings",
      "Necklaces",
      "Earrings",
      "Bracelets",
      "Bangles",
      "Chains",
      "Mangalsutra",
      "Pendants",
      "Nose Pins",
      "Coins",
      "Diamond",
      "Gold",
      "Silver",
    ],
    collectionLinks: [
      "Sunkissed",
      "Bee My Valentine",
      "Aspire",
      "Manifest",
      "Mia Minis",
      "Starburst",
      "Disco",
      "Mia Sutra",
      "Native",
      "Evil Eye",
      "Homecoming",
      "Wanderlust",
      "Men's Edition",
      "Lovestruck",
    ],
    infoLinks: [
      { title: "About Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Loyalty Programs", href: "#" },
      { title: "Offers T&Cs", href: "#" },
      { title: "Help & FAQs", href: "#" },
      { title: "Legal Policies", href: "#" },
      { title: "Cyber Security Policy", href: "#" },
    ],
    trendingLinks: [
      { title: "Gifting Range", href: "#" },
      { title: "Gift Cards", href: "#" },
    ],
    customerServiceLinks: [
      { title: "Delivery Information", href: "#" },
      { title: "International Shipping", href: "#" },
      { title: "Returns", href: "#" },
      { title: "Find a Store", href: "#" },
      { title: "Lifetime Exchange Policy", href: "#" },
    ],
    navCategories: [
      { title: "Earrings", href: "#" },
      { title: "Rings", href: "#" },
      { title: "Bracelet & Bangles", href: "#" },
      { title: "Necklaces & Pendants", href: "#" },
      { title: "Mangalsutra", href: "#" },
      { title: "Silver Jewellery", href: "#" },
      { title: "Collections", href: "#" },
      { title: "Gifting", href: "#" },
      { title: "More Jewellery", href: "#" },
    ],
    promises: [
      {
        icon: "diamond",
        title: "Certified Natural",
        subtitle: "Diamonds",
        color: "#FFE6EE",
      },
      {
        icon: "exchange",
        title: "Lifetime Exchange",
        subtitle: "in 200+ Mia Stores",
        color: "#FFE6E6",
      },
      {
        icon: "return",
        title: "30 Days Return*",
        subtitle: "Check T&C for applicable products",
        color: "#FFF5E6",
      },
      {
        icon: "shipping",
        title: "Free Shipping",
        subtitle: "On all orders",
        color: "#E6F5FF",
      },
      {
        icon: "warranty",
        title: "1 Year Warranty",
        subtitle: "On all purchases",
        color: "#F0E6F6",
      },
      {
        icon: "hallmark",
        title: "BIS Hallmarked",
        subtitle: "Certified quality",
        color: "#E6FFE6",
      },
      {
        icon: "tata",
        title: "TATA",
        subtitle: "Product",
        color: "#F5F5FF",
      },
      {
        icon: "buyers",
        title: "6 Lakhs+",
        subtitle: "Happy Buyers",
        color: "#FFE6F5",
      },
    ],
    announcementPromos: [
      "✨ Free Shipping on All Orders Above ₹5,000 ✨",
      "💎 Flat ₹500 Off on Your First Purchase — Use Code: DEMO500",
      "🎁 Lifetime Exchange at 200+ Mia Stores Nationwide",
      "🌟 0% Deduction on Old Gold Exchange — Upgrade Today!",
    ],
    giftingOccasions: [
      "Festive Jewellery",
      "Anniversary",
      "Birthday",
      "Wedding",
      "Graduation",
      "Just Because",
    ],
  },
  seo: {
    title: "Mia by Tanishq — Fine Jewellery for Every Moment",
    description:
      "Discover exquisite fine jewellery at Mia by Tanishq. Shop earrings, rings, necklaces, bangles, and more crafted in gold, diamond, and silver. A TATA product.",
    keywords: [
      "jewellery",
      "fine jewellery",
      "gold jewellery",
      "diamond jewellery",
      "earrings",
      "rings",
      "necklaces",
      "bangles",
      "Mia by Tanishq",
      "TATA",
      "luxury jewellery",
    ],
    openGraph: {
      title: "Mia by Tanishq — Fine Jewellery for Every Moment",
      description:
        "Discover exquisite fine jewellery crafted with care. Shop the latest collections in gold, diamond, and silver.",
      type: "website",
    },
  },
  businessHours: {
    timezone: "Not specified",
    weekdays: "Not specified",
    saturday: "Not specified",
    sunday: "Not specified",
  },
  team: [],
  legal: {
    copyrightText:
      "© 2025 Mia by Tanishq. All Rights Reserved. A TATA Product.",
  },
  products: {
    heroSlides: [
      {
        id: 1,
        title: "Sunkissed",
        subtitle: "Jewellery that blushes pink under the sun",
        cta: "SHOP NOW",
        gradient: "from-[#FFB6C1] via-[#FF8FAB] to-[#E8526A]",
        textColor: "text-white",
        badge: "A TATA PRODUCT",
      },
      {
        id: 2,
        title: "Aurum",
        subtitle: "Go Bold With Gold.",
        cta: "SHOP NOW",
        gradient: "from-[#8B6914] via-[#A0522D] to-[#D2691E]",
        textColor: "text-white",
        badge: "A TATA PRODUCT",
      },
      {
        id: 3,
        title: "Starburst",
        subtitle: "Shine like every star in the sky",
        cta: "EXPLORE NOW",
        gradient: "from-[#4A0E8F] via-[#7B2FBE] to-[#C77DFF]",
        textColor: "text-white",
        badge: "NEW COLLECTION",
      },
      {
        id: 4,
        title: "Manifest",
        subtitle: "Wear your dreams. Own your story.",
        cta: "DISCOVER",
        gradient: "from-[#C41E3A] via-[#FF6B81] to-[#FFB3C1]",
        textColor: "text-white",
        badge: "TRENDING",
      },
    ],
  },
  testimonials: [
    {
      id: "t1",
      name: "Priyanka Dixit",
      date: "December 22, 2025",
      text: "To me, Mia by Tanishq is a celebration of everyday me. It represents the freedom to sparkle without needing a special occasion, along with the confidence that comes with wearing fine jewellery.",
    },
    {
      id: "t2",
      name: "Rhea Dogra",
      date: "December 15, 2025",
      text: "It's a brand I discovered at my brother's wedding. I saw a lot of people gifting Mia jewellery to my sister-in-law, and I loved them, so I thought I'd get some for myself too.",
    },
    {
      id: "t3",
      name: "Blessy Sherline",
      date: "October 12, 2025",
      text: "My husband gifted me my first Mia jewellery for our wedding anniversary after my second delivery, and I felt so pampered. For me, MIA means 'Mommy Is Amazing'!",
    },
    {
      id: "t4",
      name: "Deeksha Gupta",
      date: "December 16, 2025",
      text: "It symbolises the idea of something precious, a design belonging to a heritage brand with unmatched quality and craftsmanship that stands the test of time.",
    },
    {
      id: "t5",
      name: "Riya",
      date: "July 19, 2025",
      text: "When I first got to know about it, I was amazed at the variety and the quality. Every piece feels like it was made just for me. The attention to detail is incredible.",
    },
  ],
  footer: {
    appDownloadTitle: "Download the Mia app",
    appDownloadSubtitle: "for exclusive offers!",
    newsletterText: "Stay updated with our latest collections & offers",
    newsletterPlaceholder: "Enter your email",
    currencyOptions: ["INR(₹)", "Dollar"],
    paymentMethods: ["Visa", "Mastercard", "UPI", "Net Banking"],
  },
  storeLocator: {
    storeLabel: "MIA STORE",
    title: "Mia Store",
    subtitleTop: "Locate your nearest",
    subtitleBottom: "For an exquisite jewellery experience",
    cta: "Find store",
  },
};
