import React from 'react';
import { Shield, Users, MapPin, Camera, Award, Clock, Mountain, HeadphonesIcon } from 'lucide-react';
import { AnimatedSection, FadeInUp } from '@/components/ui/animated-components';
import { Card } from '@/components/ui/card';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: Users,
    title: 'Pemandu Profesional',
    description: 'Tim pemandu bersertifikat dengan pengalaman 5+ tahun mengenal setiap sudut Sentul',
    highlight: 'Bersertifikat'
  },
  {
    icon: MapPin,
    title: 'Rute Eksklusif',
    description: 'Akses ke jalur-jalur tersembunyi dan spot foto terbaik yang tidak ada di peta umum',
    highlight: '50+ Jalur Unik'
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Asuransi perjalanan, peralatan safety lengkap, dan prosedur keamanan standar internasional',
    highlight: '100% Aman'
  },
  {
    icon: Camera,
    title: 'Dokumentasi Gratis',
    description: 'Fotografer profesional mendampingi setiap perjalanan untuk mengabadikan momen terbaik Anda',
    highlight: 'HD Quality'
  },
  {
    icon: Award,
    title: 'Penghargaan Terpercaya',
    description: 'Dipercaya 1000+ trekker dan mendapat rating 4.9/5 di berbagai platform review',
    highlight: '4.9/5 Rating'
  },
  {
    icon: Clock,
    title: 'Fleksibel 24/7',
    description: 'Booking dan konsultasi kapan saja, dengan customer service yang siap membantu 24 jam',
    highlight: 'Always Ready'
  },
  {
    icon: Mountain,
    title: 'Beragam Tingkat Kesulitan',
    description: 'Dari pemula hingga expert, kami punya jalur yang sesuai dengan kemampuan Anda',
    highlight: 'All Levels'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support Lengkap',
    description: 'Panduan pre-trip, peralatan berkualitas, dan after-service untuk pengalaman terbaik',
    highlight: 'End-to-End'
  }
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = 'Mengapa Memilih JejakSentul.id?',
  subtitle = 'Pengalaman trekking terbaik dengan standar keamanan dan kenyamanan tertinggi',
  features = defaultFeatures
}) => {
  return (
    <section id="features-section" className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="heading-responsive font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </FadeInUp>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Highlight Badge */}
                  {feature.highlight && (
                    <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {feature.highlight}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedSection delay={400}>
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Siap Memulai Petualangan?
                  </h3>
                  <p className="text-gray-600">
                    Tim kami siap membantu merencanakan trekking impian Anda
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20paket%20trekking%20JejakSentul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Konsultasi Gratis
                  </a>
                  
                  <a
                    href="/jalur-trekking"
                    className="inline-flex items-center justify-center border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Lihat Semua Jalur
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection delay={600}>
          <div className="flex flex-wrap justify-center items-center space-x-8 mt-12 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600">Happy Trekkers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600">Rute Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export { FeaturesSection };