// Trekking Routes Data Structure for JejakSentul.id

export interface ItineraryItem {
  time: string;
  activity: string;
}

export interface TrekkingRoute {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: 'pemula' | 'menengah' | 'sulit';
  duration: string;
  distance: string;
  attractions: string[];
  images: string[];
  price: {
    solo: number;
    group2_5: number;
    group6plus: number;
  };
  meetingPoint: {
    name: string;
    coordinates: [number, number];
    googleMapsUrl: string;
  };
  itinerary: ItineraryItem[];
  includes: string[];
  excludes: string[];
  whatToBring: string[];
  featured: boolean;
}

export const trekkingRoutes: TrekkingRoute[] = [
  {
    id: 'curug-leuwi-hejo',
    slug: 'curug-leuwi-hejo',
    title: 'Curug Leuwi Hejo',
    description: 'Air terjun tersembunyi dengan kolam alami berwarna hijau tosca yang memukau',
    difficulty: 'pemula',
    duration: '4-5 jam',
    distance: '3.2 km',
    attractions: ['Air Terjun', 'Kolam Alami', 'Hutan Bambu'],
    images: ['/images/routes/leuwi-hejo-1.jpg', '/images/routes/leuwi-hejo-2.jpg'],
    price: {
      solo: 150000,
      group2_5: 125000,
      group6plus: 100000
    },
    meetingPoint: {
      name: 'Gerbang Utama Jungleland Avenue',
      coordinates: [-6.5951, 106.8650],
      googleMapsUrl: 'https://goo.gl/maps/example'
    },
    itinerary: [
      { time: '08:00', activity: 'Berkumpul di meeting point, briefing keselamatan' },
      { time: '08:30', activity: 'Perjalanan menuju starting point (15 menit)' },
      { time: '09:00', activity: 'Mulai trekking, memasuki jalur hutan' },
      { time: '10:30', activity: 'Istirahat pertama, foto di spot panorama' },
      { time: '11:00', activity: 'Melanjutkan perjalanan menuju air terjun' },
      { time: '12:00', activity: 'Tiba di Curug Leuwi Hejo, berenang & makan siang' },
      { time: '13:30', activity: 'Perjalanan pulang' },
      { time: '15:00', activity: 'Kembali ke meeting point' }
    ],
    includes: ['Pemandu profesional', 'Dokumentasi foto', 'Snack & air mineral', 'Alat keselamatan', 'Asuransi perjalanan'],
    excludes: ['Transportasi pribadi', 'Makan siang', 'Peralatan pribadi'],
    whatToBring: ['Sepatu trekking/hiking', 'Pakaian ganti', 'Handuk kecil', 'Sunscreen', 'Topi/cap', 'Kamera waterproof (opsional)'],
    featured: true
  },
  {
    id: 'puncak-pancar',
    slug: 'puncak-pancar',
    title: 'Puncak Pancar',
    description: 'Pendakian ke puncak dengan pemandangan 360 derajat Bogor dan sekitarnya yang menakjubkan',
    difficulty: 'menengah',
    duration: '6-7 jam',
    distance: '5.8 km',
    attractions: ['Puncak Gunung', 'Sunrise/Sunset Point', 'Hutan Pinus'],
    images: ['/images/routes/puncak-pancar-1.jpg', '/images/routes/puncak-pancar-2.jpg'],
    price: {
      solo: 200000,
      group2_5: 175000,
      group6plus: 150000
    },
    meetingPoint: {
      name: 'Gerbang Utama Jungleland Avenue',
      coordinates: [-6.5951, 106.8650],
      googleMapsUrl: 'https://goo.gl/maps/example'
    },
    itinerary: [
      { time: '05:30', activity: 'Berkumpul di meeting point, briefing & sarapan ringan' },
      { time: '06:00', activity: 'Perjalanan menuju basecamp (30 menit)' },
      { time: '06:30', activity: 'Mulai pendakian, jalur tanjakan' },
      { time: '08:30', activity: 'Rest area 1, istirahat & foto' },
      { time: '10:00', activity: 'Melanjutkan pendakian ke puncak' },
      { time: '11:30', activity: 'Tiba di Puncak Pancar, foto & makan siang' },
      { time: '13:00', activity: 'Perjalanan turun' },
      { time: '15:30', activity: 'Kembali ke meeting point' }
    ],
    includes: ['Pemandu profesional', 'Dokumentasi foto', 'Sarapan ringan', 'Makan siang', 'Alat keselamatan', 'Asuransi perjalanan'],
    excludes: ['Transportasi pribadi', 'Peralatan pribadi'],
    whatToBring: ['Sepatu hiking yang baik', 'Jaket/sweater', 'Headlamp/senter', 'Air minum 2L', 'Powerbank', 'Obat-obatan pribadi'],
    featured: true
  },
  {
    id: 'curug-bidadari',
    slug: 'curug-bidadari',
    title: 'Curug Bidadari',
    description: 'Air terjun bertingkat dengan spot foto instagrammable dan kolam jernih untuk berenang',
    difficulty: 'pemula',
    duration: '3-4 jam',
    distance: '2.5 km',
    attractions: ['Air Terjun Bertingkat', 'Kolam Jernih', 'Batu Granit'],
    images: ['/images/routes/curug-bidadari-1.jpg', '/images/routes/curug-bidadari-2.jpg'],
    price: {
      solo: 120000,
      group2_5: 100000,
      group6plus: 85000
    },
    meetingPoint: {
      name: 'Gerbang Utama Jungleland Avenue',
      coordinates: [-6.5951, 106.8650],
      googleMapsUrl: 'https://goo.gl/maps/example'
    },
    itinerary: [
      { time: '09:00', activity: 'Berkumpul di meeting point, briefing' },
      { time: '09:30', activity: 'Perjalanan menuju starting point (20 menit)' },
      { time: '10:00', activity: 'Mulai trekking ringan' },
      { time: '11:00', activity: 'Tiba di Curug Bidadari, foto & berenang' },
      { time: '12:30', activity: 'Makan siang di spot scenic' },
      { time: '13:30', activity: 'Perjalanan pulang' },
      { time: '14:30', activity: 'Kembali ke meeting point' }
    ],
    includes: ['Pemandu profesional', 'Dokumentasi foto', 'Snack', 'Alat keselamatan', 'Asuransi perjalanan'],
    excludes: ['Transportasi pribadi', 'Makan siang', 'Peralatan berenang'],
    whatToBring: ['Sepatu anti selip', 'Baju renang', 'Handuk', 'Sunscreen', 'Kamera waterproof'],
    featured: true
  },
  {
    id: 'goa-agung',
    slug: 'goa-agung',
    title: 'Goa Agung & River Tubing',
    description: 'Eksplorasi goa alami dan petualangan river tubing di sungai jernih pegunungan Sentul',
    difficulty: 'menengah',
    duration: '5-6 jam',
    distance: '4.2 km',
    attractions: ['Goa Stalaktit', 'River Tubing', 'Sungai Jernih'],
    images: ['/images/routes/goa-agung-1.jpg', '/images/routes/goa-agung-2.jpg'],
    price: {
      solo: 250000,
      group2_5: 225000,
      group6plus: 200000
    },
    meetingPoint: {
      name: 'Gerbang Utama Jungleland Avenue',
      coordinates: [-6.5951, 106.8650],
      googleMapsUrl: 'https://goo.gl/maps/example'
    },
    itinerary: [
      { time: '08:00', activity: 'Berkumpul di meeting point, briefing safety' },
      { time: '08:30', activity: 'Perjalanan ke lokasi (45 menit)' },
      { time: '09:30', activity: 'Eksplorasi Goa Agung dengan headlamp' },
      { time: '11:00', activity: 'Persiapan river tubing, safety briefing' },
      { time: '11:30', activity: 'River tubing adventure (1.5 jam)' },
      { time: '13:00', activity: 'Makan siang di tepi sungai' },
      { time: '14:00', activity: 'Perjalanan pulang' },
      { time: '15:30', activity: 'Kembali ke meeting point' }
    ],
    includes: ['Pemandu profesional', 'Peralatan river tubing', 'Headlamp', 'Life jacket', 'Dokumentasi foto', 'Makan siang', 'Asuransi perjalanan'],
    excludes: ['Transportasi pribadi', 'Pakaian ganti'],
    whatToBring: ['Pakaian yang bisa basah', 'Sandal gunung', 'Pakaian ganti lengkap', 'Handuk', 'Plastik waterproof untuk barang'],
    featured: false
  }
];

// Helper functions
export const getFeaturedRoutes = (): TrekkingRoute[] => {
  return trekkingRoutes.filter(route => route.featured);
};

export const getRouteBySlug = (slug: string): TrekkingRoute | undefined => {
  return trekkingRoutes.find(route => route.slug === slug);
};

export const getRoutesByDifficulty = (difficulty: TrekkingRoute['difficulty']): TrekkingRoute[] => {
  return trekkingRoutes.filter(route => route.difficulty === difficulty);
};

export const filterRoutes = (filters: {
  difficulty?: TrekkingRoute['difficulty'];
  maxDuration?: number;
  attraction?: string;
}): TrekkingRoute[] => {
  return trekkingRoutes.filter(route => {
    if (filters.difficulty && route.difficulty !== filters.difficulty) {
      return false;
    }
    
    if (filters.maxDuration) {
      const duration = parseInt(route.duration.split('-')[0]);
      if (duration > filters.maxDuration) {
        return false;
      }
    }
    
    if (filters.attraction) {
      const hasAttraction = route.attractions.some(attr => 
        attr.toLowerCase().includes(filters.attraction!.toLowerCase())
      );
      if (!hasAttraction) {
        return false;
      }
    }
    
    return true;
  });
};