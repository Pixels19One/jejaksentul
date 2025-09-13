import React from 'react';
import { Link } from '@inertiajs/react';
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { AnimatedSection, FadeInUp } from '@/components/ui/animated-components';
import { TrekkingRoute } from '@/lib/data/trekking-routes';
import { formatCurrency, getDifficultyColor, getDifficultyLabel } from '@/lib/utils';

interface PopularRoutesProps {
  title?: string;
  subtitle?: string;
  routes: TrekkingRoute[];
  showAll?: boolean;
}

const PopularRoutes: React.FC<PopularRoutesProps> = ({
  title = 'Jalur Trekking Populer',
  subtitle = 'Jelajahi jalur-jalur terbaik yang telah dipilih ribuan trekker',
  routes,
  showAll = false
}) => {
  const displayRoutes = showAll ? routes : routes.slice(0, 4);

  return (
    <section id="popular-routes" className="py-24 bg-white">
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

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {displayRoutes.map((route, index) => (
            <AnimatedSection key={route.id} delay={index * 150}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={route.images[0]}
                    alt={route.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getDifficultyColor(route.difficulty)}`}>
                      {getDifficultyLabel(route.difficulty)}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-1 text-white">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{route.rating}</span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Location */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {route.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{route.location}</span>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{route.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{route.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {route.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Mulai dari</div>
                      <div className="text-2xl font-bold text-primary">
                        {formatCurrency(route.pricing.regular.price)}
                      </div>
                      <div className="text-xs text-gray-500">per orang</div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">
                        {route.totalReviews} ulasan
                      </div>
                      <div className="flex items-center justify-end">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3 h-3 ${
                              star <= Math.floor(route.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link href={`/jalur-trekking/${route.slug}`}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Lihat Detail
                      </Link>
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a
                        href={`https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20paket%20${route.name}%20(${formatCurrency(route.pricing.regular.price)})`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Book
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Special Offer Badge */}
                {route.pricing.regular.discount && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    SAVE {route.pricing.regular.discount}%
                  </div>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        {!showAll && (
          <AnimatedSection delay={600}>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                asChild
              >
                <Link href="/jalur-trekking">
                  Lihat Semua Jalur Trekking
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        )}

        {/* Quick Filter Tabs - Optional */}
        <AnimatedSection delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Semua Jalur
            </Button>
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Pemula
            </Button>
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Menengah
            </Button>
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Expert
            </Button>
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Air Terjun
            </Button>
            <Button variant="outline" size="sm" className="bg-white border-gray-300 hover:border-primary hover:text-primary">
              Puncak
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export { PopularRoutes };