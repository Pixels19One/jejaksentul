import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { AnimatedSection, FadeInUp } from '@/components/ui/animated-components';
import { useAutoSlide } from '@/hooks';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  route: string;
  review: string;
  images?: string[];
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = 'Apa Kata Mereka?',
  subtitle = 'Testimoni dari ribuan trekker yang telah merasakan pengalaman tak terlupakan bersama kami',
  testimonials,
  autoSlide = true,
  slideInterval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoSlide);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length, slideInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  if (!testimonials.length) return null;

  return (
    <section className="py-24 bg-gray-50">
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

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white p-8 md:p-12 shadow-lg border-0">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Testimonial Content */}
                        <div className="md:col-span-2">
                          {/* Quote Icon */}
                          <Quote className="w-12 h-12 text-primary/20 mb-6" />
                          
                          {/* Rating */}
                          <div className="flex items-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-5 h-5 ${
                                  star <= testimonial.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                              ({testimonial.rating}/5)
                            </span>
                          </div>

                          {/* Review */}
                          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                            "{testimonial.review}"
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <OptimizedImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.location} • {testimonial.date}
                              </div>
                              <div className="text-sm text-primary">
                                Jalur: {testimonial.route}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Image Gallery */}
                        {testimonial.images && testimonial.images.length > 0 && (
                          <div className="md:col-span-1">
                            <div className="grid grid-cols-2 gap-2">
                              {testimonial.images.slice(0, 4).map((image, index) => (
                                <div 
                                  key={index}
                                  className={`relative overflow-hidden rounded-lg ${
                                    index === 0 ? 'col-span-2 h-40' : 'h-20'
                                  }`}
                                >
                                  <OptimizedImage
                                    src={image}
                                    alt={`${testimonial.name} trekking experience ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full p-0 border-gray-300 hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide 
                        ? 'bg-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full p-0 border-gray-300 hover:border-primary hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Auto-play toggle */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                {isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-gray-600">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-gray-600">Ulasan Positif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-gray-600">Repeat Customer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">Kepuasan Terjamin</div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ingin Jadi Bagian dari Cerita Mereka?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan trekker yang telah merasakan pengalaman luar biasa 
                bersama JejakSentul.id
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                  asChild
                >
                  <a
                    href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20bergabung%20dalam%20petualangan%20trekking%20JejakSentul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Mulai Petualangan
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8"
                  asChild
                >
                  <a href="/testimonials">
                    Baca Semua Testimoni
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export { TestimonialsSection };