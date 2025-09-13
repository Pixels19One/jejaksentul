import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navigationItems, contactInfo } from '@/lib/content/homepage';
import { useScrollPosition } from '@/hooks';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { url } = usePage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [url]);

  // Add backdrop blur and background when scrolled
  const isScrolled = scrollPosition > 10;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">JS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 font-heading">
                JejakSentul.id
              </h1>
              <p className="text-xs text-gray-600 -mt-1">
                Trekking & Adventure
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  url === item.href 
                    ? "text-primary" 
                    : isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {item.label}
                {url === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "hover:bg-primary/10",
                !isScrolled && "text-white hover:text-primary"
              )}
            >
              <a 
                href={`tel:${contactInfo.whatsapp}`}
                className="flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Telepon</span>
              </a>
            </Button>
            
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <a 
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              !isScrolled && "text-white hover:text-primary hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="container-custom py-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-3 px-4 text-base font-medium rounded-lg transition-colors",
                        url === item.href 
                          ? "text-primary bg-primary/5" 
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="flex space-x-3 mt-6 px-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a href={`tel:${contactInfo.whatsapp}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Telepon
                  </a>
                </Button>
                
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };