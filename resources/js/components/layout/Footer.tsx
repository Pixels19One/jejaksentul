import React from 'react';
import { Link } from '@inertiajs/react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationItems, contactInfo, siteConfig } from '@/lib/content/homepage';
import { SOCIAL_MEDIA } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading">JejakSentul.id</h3>
                  <p className="text-gray-300 text-sm">Trekking & Adventure Guide</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Customer Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  4.9/5 dari 1000+ trekker
                </span>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Ikuti kami:</span>
                <div className="flex space-x-3">
                  <a 
                    href={SOCIAL_MEDIA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={SOCIAL_MEDIA.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={SOCIAL_MEDIA.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 font-heading">Menu Utama</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6 font-heading">Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">WhatsApp</p>
                    <a 
                      href={contactInfo.whatsappUrl}
                      className="text-white hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">Telepon</p>
                    <a 
                      href={`tel:${contactInfo.whatsapp}`}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">Meeting Point</p>
                    <p className="text-white text-sm">
                      {contactInfo.meetingPoint.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">Jam Operasional</p>
                    <p className="text-white text-sm">
                      {contactInfo.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full mt-6 bg-primary hover:bg-primary/90" 
                asChild
              >
                <a 
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} JejakSentul.id. Semua hak cipta dilindungi.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/kebijakan-privasi"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                href="/syarat-ketentuan"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Syarat & Ketentuan
              </Link>
              <div className="text-gray-400 text-xs">
                Made with ❤️ in Bogor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter/CTA Section - Optional */}
      <div className="bg-gradient-to-r from-primary to-accent py-8">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2 font-heading">
              Siap untuk Petualangan Berikutnya?
            </h3>
            <p className="text-white/90 mb-4">
              Jangan lewatkan update terbaru jalur trekking dan penawaran spesial
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/jalur-trekking">
                  Jelajahi Jalur Trekking
                </Link>
              </Button>
              <Button 
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <a 
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };