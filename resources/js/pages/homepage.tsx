import React from 'react';
import { Head } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import { HeroSection, FeaturesSection, PopularRoutes, TestimonialsSection } from '@/components/sections';
import { TrekkingRoute } from '@/lib/data/trekking-routes';
import { homepageContent } from '@/lib/content/homepage';

interface HomePageProps {
  routes: TrekkingRoute[];
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    avatar: string;
    rating: number;
    date: string;
    route: string;
    review: string;
    images?: string[];
  }>;
}

export default function Welcome({ routes = [], testimonials = [] }: HomePageProps) {
    return (
        <AppLayout>
            <Head>
                <title>JejakSentul.id - Trekking & Adventure di Sentul Bogor</title>
                <meta 
                    name="description" 
                    content="Jelajahi keindahan Sentul dengan paket trekking terbaik. Pemandu profesional, rute eksklusif, keamanan terjamin. Booking sekarang!" 
                />
                <meta name="keywords" content="trekking sentul, hiking bogor, adventure sentul, wisata alam sentul, gunung sentul" />
                
                {/* Open Graph */}
                <meta property="og:title" content="JejakSentul.id - Trekking & Adventure di Sentul Bogor" />
                <meta property="og:description" content="Jelajahi keindahan Sentul dengan paket trekking terbaik. Pemandu profesional, rute eksklusif, keamanan terjamin." />
                <meta property="og:image" content="/images/hero-sentul-trekking.jpg" />
                <meta property="og:url" content="https://jejaksentul.id" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="JejakSentul.id - Trekking & Adventure di Sentul Bogor" />
                <meta name="twitter:description" content="Jelajahi keindahan Sentul dengan paket trekking terbaik. Pemandu profesional, rute eksklusif, keamanan terjamin." />
                <meta name="twitter:image" content="/images/hero-sentul-trekking.jpg" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "JejakSentul.id",
                        "url": "https://jejaksentul.id",
                        "logo": "https://jejaksentul.id/logo.svg",
                        "description": "Platform trekking dan adventure terpercaya di Sentul, Bogor dengan pemandu profesional dan rute eksklusif",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Sentul",
                            "addressRegion": "Bogor",
                            "addressCountry": "ID"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+62-812-3456-789",
                            "contactType": "customer service",
                            "availableLanguage": "Indonesian"
                        },
                        "sameAs": [
                            "https://instagram.com/jejaksentul.id",
                            "https://facebook.com/jejaksentul.id",
                            "https://youtube.com/@jejaksentul.id",
                            "https://tiktok.com/@jejaksentul.id"
                        ]
                    })}
                </script>
            </Head>

            {/* Hero Section */}
            <HeroSection content={homepageContent.hero} />

            {/* Features Section */}
            <FeaturesSection />

            {/* Popular Routes */}
            <PopularRoutes 
                routes={routes}
                showAll={false}
            />

            {/* Testimonials */}
            <TestimonialsSection 
                testimonials={testimonials}
                autoSlide={true}
                slideInterval={6000}
            />
        </AppLayout>
    );
}