// Application constants for JejakSentul.id

export const APP_CONFIG = {
  name: 'JejakSentul.id',
  description: 'Temukan jejak tersembunyi Sentul bersama pemandu lokal terpercaya',
  url: 'https://jejaksentul.id',
  version: '1.0.0',
} as const;

export const CONTACT_INFO = {
  whatsapp: '+62 851-6368-9179',
  whatsappNumber: '6285163689179',
  email: 'info@jejaksentul.id',
  address: 'Sentul, Bogor, Jawa Barat',
  operatingHours: 'Setiap hari: 07:00 - 17:00 WIB',
} as const;

export const MEETING_POINT = {
  name: 'Gerbang Utama Jungleland Avenue',
  address: 'Sentul, Bogor, Jawa Barat',
  coordinates: [-6.5951, 106.8650] as [number, number],
  googleMapsUrl: 'https://goo.gl/maps/example',
} as const;

export const SOCIAL_MEDIA = {
  instagram: 'https://instagram.com/jejaksentul.id',
  facebook: 'https://facebook.com/jejaksentul.id',
  youtube: 'https://youtube.com/@jejaksentul',
  tiktok: 'https://tiktok.com/@jejaksentul',
} as const;

export const BOOKING_CONFIG = {
  minimumAdvanceBooking: 1, // days
  maximumAdvanceBooking: 90, // days
  minimumParticipants: 1,
  maximumParticipants: 20,
  cutoffTime: '18:00', // booking cutoff time for next day
} as const;

export const FILTER_OPTIONS = {
  difficulty: [
    { value: 'pemula', label: 'Pemula' },
    { value: 'menengah', label: 'Menengah' },
    { value: 'sulit', label: 'Sulit' },
  ],
  duration: [
    { value: '1-3jam', label: '1-3 Jam' },
    { value: '4-6jam', label: '4-6 Jam' },
    { value: '7jam+', label: '7+ Jam' },
  ],
  attractions: [
    { value: 'air-terjun', label: 'Air Terjun' },
    { value: 'goa', label: 'Goa' },
    { value: 'puncak', label: 'Puncak' },
    { value: 'sungai', label: 'Sungai' },
    { value: 'hutan', label: 'Hutan' },
    { value: 'kolam-alami', label: 'Kolam Alami' },
  ],
} as const;

export const PRICE_RANGES = {
  budget: { min: 0, max: 100000, label: 'Budget (< 100K)' },
  standard: { min: 100000, max: 200000, label: 'Standard (100K - 200K)' },
  premium: { min: 200000, max: 999999, label: 'Premium (> 200K)' },
} as const;

export const SEO_CONFIG = {
  defaultTitle: 'JejakSentul.id - Trekking & Hiking Sentul Bogor',
  defaultDescription: 'Temukan jejak tersembunyi Sentul bersama pemandu lokal terpercaya. Jalur trekking eksklusif, dokumentasi gratis, dan keamanan terjamin.',
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
    'wisata petualangan jabodetabek',
  ],
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@jejaksentul',
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
} as const;

export const BOOKING_MESSAGES = {
  whatsappTemplate: (data: {
    routeTitle: string;
    date: string;
    participants: number;
    customerName: string;
    whatsappNumber: string;
    estimatedPrice: number;
    specialRequests?: string;
  }) => `Halo JejakSentul.id! 👋

Saya ingin memesan paket trekking dengan detail:

🏔️ *Jalur Trekking:* ${data.routeTitle}
📅 *Tanggal:* ${data.date}
👥 *Jumlah Peserta:* ${data.participants} orang
💰 *Estimasi Harga:* Rp ${data.estimatedPrice.toLocaleString('id-ID')}

📞 *Kontak Pemesan:*
Nama: ${data.customerName}
WhatsApp: ${data.whatsappNumber}

${data.specialRequests ? `📝 *Catatan Khusus:* ${data.specialRequests}` : ''}

Mohon konfirmasi ketersediaan dan detail lebih lanjut. Terima kasih! 🙏`,

  inquiryTemplate: (message: string) => `Halo JejakSentul.id! 👋

${message}

Mohon informasinya. Terima kasih! 🙏`,
} as const;

export const ERROR_MESSAGES = {
  network: 'Gagal terhubung ke server. Silakan periksa koneksi internet Anda.',
  validation: 'Data yang dimasukkan tidak valid. Silakan periksa kembali.',
  booking: 'Gagal mengirim permintaan booking. Silakan coba lagi.',
  generic: 'Terjadi kesalahan. Silakan coba lagi atau hubungi customer service.',
} as const;

export const SUCCESS_MESSAGES = {
  booking: 'Permintaan booking berhasil dikirim via WhatsApp!',
  contact: 'Pesan berhasil dikirim. Terima kasih!',
  subscribe: 'Berhasil berlangganan newsletter!',
} as const;