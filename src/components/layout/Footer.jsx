import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Heart,
  MessageCircle,
} from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Specialists', href: '/specialists' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Blog', href: '/blog' },
  ];

  const services = [
    { name: 'General Checkup', href: '/services/general-checkup' },
    { name: 'Teeth Whitening', href: '/services/teeth-whitening' },
    { name: 'Orthodontics', href: '/services/orthodontics' },
    { name: 'Dental Implants', href: '/services/dental-implants' },
    { name: 'Root Canal', href: '/services/root-canal' },
    { name: 'Emergency Care', href: '/services/emergency' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading">Shirazi Dental Care</h2>
                <p className="text-secondary-400 text-sm font-medium">Modern Dentistry • Trusted Excellence • Radiant Smiles</p>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                At Shirazi Dental Care, we redefine premium dentistry through unwavering commitment to the highest standards of safety, precision, and patient comfort. Your smile deserves nothing less than extraordinary.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={16}
                    className="text-secondary-400 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-300">
                    Rawalpindi, Pakistan
                    <br />
                    <span className="text-xs text-neutral-400">Luxury Dental Care Center</span>
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-secondary-400 flex-shrink-0" />
                  <a
                    href="tel:+923009206148"
                    className="text-sm text-neutral-300 hover:text-secondary-300 transition-colors font-medium"
                  >
                    Call or WhatsApp: +92 300 920 6148
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle size={16} className="text-secondary-400 flex-shrink-0" />
                  <a
                    href="https://wa.me/923009206148"
                    className="text-sm text-neutral-300 hover:text-secondary-300 transition-colors font-medium"
                  >
                    Priority WhatsApp Appointments
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-secondary-400 flex-shrink-0" />
                  <a
                    href="mailto:info@shirazidentalcare.com"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    info@shirazidentalcare.com
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    size={16}
                    className="text-secondary-400 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm text-neutral-300">
                    <p className="font-medium mb-1">Hours of Operation</p>
                    <p>Mon - Sat: 5:00 PM - 9:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-300 hover:text-secondary-300 transition-colors flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary-400"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-sm text-neutral-300 hover:text-secondary-300 transition-colors flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary-400"
                      />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>

              {/* Newsletter */}
              <div className="space-y-4 mb-8">
                <p className="text-sm text-neutral-300">
                  Subscribe for exclusive dental tips and premium care updates.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-all"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    className="bg-secondary-500 hover:bg-secondary-600"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Social Links */}
              {/* <div>
                <h4 className="text-sm font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Clinic Gallery Section */}
        <div className="border-t border-neutral-800 py-12">
          <h3 className="text-lg font-semibold mb-8 text-white text-center">Our Modern Clinic</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2Fe4d830f146c847ffb0ab5a06133d4dfa?format=webp&width=800&height=1200"
                alt="Clinic interior - waiting area"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2F7ec9a0ef3bf4426094c8d02d61c327a8?format=webp&width=800&height=1200"
                alt="Clinic interior - treatment room"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2F12f2c02cf64b4ffb93011a129edf45c9?format=webp&width=800&height=1200"
                alt="Clinic interior - modern equipment"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2F0e7d248145e8496e98efa3e98f5be6eb?format=webp&width=800&height=1200"
                alt="Clinic interior - sterilization area"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2F361169dc2d7c44f39e651bb223cd5108?format=webp&width=800&height=1200"
                alt="Clinic interior - patient chair"
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {currentYear} Shirazi Dental Care. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-neutral-400 hover:text-secondary-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center text-sm text-neutral-400">
              Crafted with <Heart size={14} className="mx-1 text-secondary-500" /> for extraordinary smiles
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
