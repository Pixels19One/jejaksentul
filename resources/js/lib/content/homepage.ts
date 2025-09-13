// Homepage Content Structure for JejakSentul.id

export interface TestimonialData {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
}

export interface SocialProofData {
  title: string;
  subtitle: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  cta: string;
  backgroundVideo: string;
  backgroundImage: string;
}

export interface CTASection {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
}

export const homepageContent = {
  hero: {
    headline: "Setiap Langkah Adalah Cerita",
    subheadline: "Temukan Jejak Tersembunyi Sentul Bersama Pemandu Lokal Terpercaya",
    cta: "Jelajahi Jalur Trekking",
    backgroundVideo: "/videos/sentul-hero.mp4",
    backgroundImage: "/images/hero-sentul.jpg"
  },
  
  features: [
    {
      title: "Pemandu Profesional",
      description: "Dipandu oleh local guide bersertifikat dengan pengalaman 5+ tahun di jalur-jalur Sentul",
      icon: "shield"
    },
    {
      title: "Rute Eksklusif",
      description: "Akses ke jalur tersembunyi dan spot foto instagrammable yang tidak ditemukan di tempat lain",
      icon: "map-pin"
    },
    {
      title: "Keamanan Terjamin",
      description: "Dilengkapi asuransi perjalanan dan peralatan safety berstandar internasional",
      icon: "heart"
    },
    {
      title: "Dokumentasi Gratis",
      description: "Foto profesional perjalanan Anda tanpa biaya tambahan oleh photographer berpengalaman",
      icon: "camera"
    }
  ] as FeatureData[],

  socialProof: {
    title: "Dipercaya 1000+ Trekker",
    subtitle: "Rating 4.9/5 dari pengalaman nyata customer kami",
    stats: [
      { number: "1000+", label: "Happy Trekkers" },
      { number: "50+", label: "Jalur Tersedia" },
      { number: "4.9/5", label: "Customer Rating" },
      { number: "5+", label: "Tahun Pengalaman" }
    ]
  } as SocialProofData,

  testimonials: [
    {
      name: "Sarah Wijaya",
      role: "Marketing Manager",
      avatar: "/images/avatars/sarah.jpg",
      rating: 5,
      text: "Pengalaman trekking terbaik! Guide-nya sangat profesional dan spot-spotnya benar-benar hidden gems. Foto-foto yang dihasilkan juga kualitas profesional. Highly recommended!"
    },
    {
      name: "Budi Santoso",
      role: "IT Consultant", 
      avatar: "/images/avatars/budi.jpg",
      rating: 5,
      text: "Perfect untuk team building! Kami rombongan 15 orang dari kantor, semuanya puas. Organisasinya rapi, safety protocol ketat, dan pemandangannya luar biasa indah."
    },
    {
      name: "Maya Chen",
      role: "Content Creator",
      avatar: "/images/avatars/maya.jpg", 
      rating: 5,
      text: "Sebagai content creator, saya butuh spot yang unik dan instagrammable. JejakSentul.id berhasil membawa saya ke tempat-tempat yang belum pernah saya lihat sebelumnya!"
    },
    {
      name: "Rahman Hidayat",
      role: "Fotografer",
      avatar: "/images/avatars/rahman.jpg",
      rating: 5,
      text: "Jalur-jalurnya memang tersembunyi dan pemandangannya luar biasa! Pemandunya ramah dan tahu banyak spot foto terbaik. Worth every penny!"
    },
    {
      name: "Lisa Andini",
      role: "Travel Blogger",
      avatar: "/images/avatars/lisa.jpg",
      rating: 5,
      text: "Sudah ikut 3 kali trekking dengan JejakSentul.id, selalu ada surprise di setiap tripnya. Safety-nya juga top notch, recommended banget!"
    }
  ] as TestimonialData[],

  cta: {
    title: "Siap Memulai Petualangan Anda?",
    subtitle: "Jangan biarkan akhir pekan berlalu begitu saja. Ciptakan memori yang tak terlupakan bersama kami!",
    primaryButton: "Pilih Jalur Trekking",
    secondaryButton: "Konsultasi via WhatsApp"
  } as CTASection
};

// Navigation items
export const navigationItems = [
  { href: '/', label: 'Beranda' },
  { href: '/jalur-trekking', label: 'Jalur Trekking' },
  { href: '/paket-harga', label: 'Paket & Harga' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/blog', label: 'Blog' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' }
];

// Contact information
export const contactInfo = {
  whatsapp: '+62 851-6368-9179',
  whatsappUrl: 'https://wa.me/6285163689179',
  email: 'info@jejaksentul.id',
  address: 'Sentul, Bogor, Jawa Barat',
  operatingHours: 'Setiap hari: 07:00 - 17:00 WIB',
  meetingPoint: {
    name: 'Gerbang Utama Jungleland Avenue',
    address: 'Sentul, Bogor',
    coordinates: [-6.5951, 106.8650],
    googleMapsUrl: 'https://goo.gl/maps/example'
  }
};

// SEO and Analytics constants
export const siteConfig = {
  name: 'JejakSentul.id',
  description: 'Temukan jejak tersembunyi Sentul bersama pemandu lokal terpercaya. Jalur trekking eksklusif, dokumentasi gratis, dan keamanan terjamin.',
  url: 'https://jejaksentul.id',
  ogImage: '/images/og-image.jpg',
  keywords: [
    'trekking sentul',
    'hiking bogor', 
    'wisata alam sentul',
    'pemandu trekking sentul',
    'jalur trekking tersembunyi',
    'adventure sentul',
    'curug sentul',
    'air terjun sentul',
    'trekking guide bogor',
    'wisata petualangan jabodetabek'
  ]
};