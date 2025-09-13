import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronDown, Play, MapPin, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FadeInUp, AnimatedSection } from '@/components/ui/animated-components';
import { scrollToSection } from '@/lib/utils';
import { HeroContent } from '@/lib/content/homepage';

interface HeroSectionProps {
  content: HeroContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const handleScrollToNext = () => {
    scrollToSection('features-section');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {content.backgroundVideo ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster={content.backgroundImage}
          >
            <source src={content.backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video fails */}
            <OptimizedImage
              src={content.backgroundImage}
              alt="Sentul Trekking Background"
              fill
              className="object-cover"
              priority
            />
          </video>
        ) : (
          <OptimizedImage
            src={content.backgroundImage}
            alt="Sentul Trekking Background"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <FadeInUp>
          <div className="mb-6">
            {/* Stats Badge */}
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <div className="flex items-center space-x-1 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center space-x-1 text-sm">
                <Users className="w-4 h-4" />
                <span>1000+ Trekker</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center space-x-1 text-sm">
                <MapPin className="w-4 h-4" />
                <span>50+ Jalur</span>
              </div>
            </div>
            
            <h1 className="heading-responsive font-bold mb-6 leading-tight font-heading">
              {content.headline}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              {content.subheadline}
            </p>
          </div>
        </FadeInUp>

        <AnimatedSection delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              asChild
            >
              <Link href="/jalur-trekking">
                <MapPin className="w-5 h-5 mr-2" />
                {content.cta}
              </Link>
            </Button>

            {/* Play Video Button - if video exists */}
            {content.backgroundVideo && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/50 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => {
                  // Handle video play/pause if needed
                  console.log('Play video');
                }}
              >
                <Play className="w-5 h-5 mr-2" />
                Tonton Video
              </Button>
            )}
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span>Pemandu Bersertifikat</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span>Asuransi Perjalanan</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              <span>Dokumentasi Gratis</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection delay={600}>
        <button
          onClick={handleScrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors group"
          aria-label="Scroll to next section"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 hidden sm:block">Scroll untuk lebih lanjut</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
          </div>
        </button>
      </AnimatedSection>

      {/* Floating Action Elements */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-xs">Tahun Pengalaman</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-xs">Keamanan Terjamin</div>
          </div>
        </div>
      </div>

      {/* Weather/Season Info - Optional */}
      <div className="absolute top-8 left-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Cuaca Ideal untuk Trekking</span>
          </div>
          <div className="text-xs opacity-75">
            Musim kemarau - Jalur kering & aman
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };