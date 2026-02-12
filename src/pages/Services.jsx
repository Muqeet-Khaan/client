import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Search,
  Sparkles,
  Activity,
  Hammer,
  Crown,
  Smile,
  Zap,
  Baby,
  Layers,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SEO from '../components/common/SEO';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState('consultation');

  const serviceCategories = [
    {
      id: 'consultation',
      name: 'Consultation',
      icon: <Stethoscope className="w-5 h-5" />,
      description: 'Professional dental assessment to evaluate your oral health and discuss treatment options.',
      services: [
        { title: 'Dental Consultation', price: '500' },
      ],
    },
    {
      id: 'extractions',
      name: 'Tooth Extractions',
      icon: <ShieldAlert className="w-5 h-5" />,
      description: 'Safe and gentle removal of problematic or damaged teeth.',
      services: [
        { title: 'Simple Extraction', price: '1500–2000', discountPrice: '1000' },
        { title: 'Deciduous (Milk) Tooth Extraction', price: '1000–1500', discountPrice: '1000' },
        { title: 'Mobile Tooth Extraction', price: '1200', discountPrice: '800' },
        { title: 'Third Molar Extraction', price: '2500', discountPrice: '2000' },
        { title: 'Surgical Extraction (Any Tooth)', price: '3000–6500', discountPrice: '2500–4500', note: 'According to complexity' },
      ],
    },
    {
      id: 'diagnostics',
      name: 'Diagnostics',
      icon: <Search className="w-5 h-5" />,
      description: 'Advanced imaging and diagnostic tools for precise dental care.',
      services: [
        { title: 'Dental Radiograph (X-Ray)', price: '500' },
      ],
    },
    {
      id: 'cleaning',
      name: 'Cleaning & Polishing',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Professional cleaning to remove plaque and restore your teeth\'s natural shine.',
      services: [
        { title: 'Scaling', price: '6000', discountPrice: '5000' },
        { title: 'Polishing', price: '1500' },
      ],
    },
    {
      id: 'rct',
      name: 'Root Canal Treatment',
      icon: <Activity className="w-5 h-5" />,
      description: 'Saving your natural teeth by treating infected or damaged dental pulp.',
      services: [
        { title: 'RCT (Anterior/Posterior)', price: '8000–10000', discountPrice: '6500' },
      ],
    },
    {
      id: 'post-core',
      name: 'Post & Core',
      icon: <Hammer className="w-5 h-5" />,
      description: 'Reinforcement for teeth that have lost significant structure.',
      services: [
        { title: 'Post Insertion / Nayyar Core', price: '2500', discountPrice: '2000' },
        { title: 'Post & Core Build Up', price: '3500', discountPrice: '2500' },
      ],
    },
    {
      id: 'crowns',
      name: 'Crowns',
      icon: <Crown className="w-5 h-5" />,
      description: 'High-quality dental crowns to restore function and appearance.',
      services: [
        { title: 'Crown Per Tooth (Shofu)', price: '8000', discountPrice: '6500' },
        { title: 'Crown Per Tooth (Vita)', price: '10000', discountPrice: '7000' },
        { title: 'Zirconium Crown / Tooth', price: '25000', discountPrice: '20000' },
        { title: 'Crown Cementation (Per Unit)', price: '2000', discountPrice: '1500' },
      ],
    },
    {
      id: 'dentures',
      name: 'Dentures',
      icon: <Smile className="w-5 h-5" />,
      description: 'Custom-fitted solutions for replacing missing teeth.',
      services: [
        { title: 'Removable Partial Denture', price: '2500 per unit', discountPrice: '2500' },
        { title: 'Flexible Partial Denture', price: '6000', discountPrice: '5500' },
      ],
    },
    {
      id: 'fillings',
      name: 'Fillings',
      icon: <Layers className="w-5 h-5" />,
      description: 'Restoring teeth damaged by decay or fracture with durable materials.',
      services: [
        { title: 'GIC Filling', price: '2500', discountPrice: '2000' },
        { title: 'GIC Filling (Layering Technique)', price: '2700', discountPrice: '2200' },
        { title: 'Amalgam Filling', price: '3500–4000', discountPrice: '3000–3500', note: 'According to number of capsules' },
        { title: 'Composite Filling', price: '3500', discountPrice: '2500' },
        { title: 'Composite Build Up', price: '4500', discountPrice: '3000' },
      ],
    },
    {
      id: 'pediatric',
      name: 'Pediatric Dentistry',
      icon: <Baby className="w-5 h-5" />,
      description: 'Specialized dental care for children in a friendly environment.',
      services: [
        { title: 'Primary Tooth Pulpotomy', price: '4500', discountPrice: '3500' },
      ],
    },
    {
      id: 'orthodontics',
      name: 'Orthodontics',
      icon: <Zap className="w-5 h-5" />,
      description: 'Correcting alignment issues for a healthier, more beautiful smile.',
      services: [
        { title: 'Orthodontic Retainer', price: '8000–12000' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <SEO
        title="Dental Services & Pricing | Shirazi Dental Care Rawalpindi"
        description="Explore our comprehensive dental services in Rawalpindi. Transparent pricing for Consultation, RCT, Crowns, Implants, and more with exclusive discounts."
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
              Our Services
              <br />
              <span className="text-secondary-500 font-medium">Pricing Directory</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-light">
              Transparent pricing for professional dental care. Discover our comprehensive range of treatments with exclusive discounts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar Navigation */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Service Categories</h2>
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 no-scrollbar">
                    {serviceCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setExpandedCategory(category.id)}
                        className={`flex items-center space-x-3 whitespace-nowrap px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                          expandedCategory === category.id
                            ? 'bg-secondary-500 text-primary-900 font-semibold shadow-md translate-x-1'
                            : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                        }`}
                      >
                        <span className={expandedCategory === category.id ? 'text-primary-900' : 'text-secondary-500'}>
                          {category.icon}
                        </span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-900 rounded-2xl p-8 text-white hidden lg:block">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-500">Need Help?</h3>
                  <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                    Not sure which treatment is right for you? Book a consultation and our specialists will help you decide.
                  </p>
                  <Button
                    as={Link}
                    to="/contact"
                    className="w-full bg-white text-primary-900 hover:bg-neutral-100"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {serviceCategories.map((category) => (
                  expandedCategory === category.id && (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <h2 className="text-4xl font-bold text-primary-900 dark:text-white flex items-center gap-3">
                          <span className="text-secondary-500">{category.icon}</span>
                          {category.name}
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                          {category.description}
                        </p>
                      </div>

                      <Card padding="none" className="overflow-hidden border-neutral-200 dark:border-neutral-700 shadow-xl shadow-neutral-200/50 dark:shadow-none">
                        <div className="bg-white dark:bg-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-700">
                          {category.services.map((service, index) => (
                            <div
                              key={index}
                              className="p-6 md:p-8 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1">
                                  <h4 className="text-xl font-semibold text-primary-900 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                                    {service.title}
                                  </h4>
                                  {service.note && (
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
                                      * {service.note}
                                    </p>
                                  )}
                                </div>
                                <div className="flex items-center md:text-right">
                                  {service.discountPrice ? (
                                    <div className="flex flex-col items-start md:items-end">
                                      <div className="flex items-baseline gap-2">
                                        <span className="text-sm text-neutral-400 line-through font-medium">
                                          PKR {service.price}
                                        </span>
                                        <span className="text-2xl font-bold text-primary-900 dark:text-white">
                                          PKR {service.discountPrice}
                                        </span>
                                      </div>
                                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-400 mt-1 uppercase tracking-wider">
                                        After Discount
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-2xl font-bold text-primary-900 dark:text-white">
                                      PKR {service.price}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>

                      <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all border border-dashed border-neutral-300 dark:border-neutral-600">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center text-secondary-500 shadow-sm">
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                          <div>
                            <p className="font-semibold text-primary-900 dark:text-white">Ready to book this service?</p>
                            <p className="text-sm text-neutral-500">Contact us via WhatsApp for quick appointment.</p>
                          </div>
                        </div>
                        <a
                          href="https://wa.me/923009206148"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:block bg-secondary-500 text-primary-900 px-6 py-2 rounded-xl font-bold hover:bg-secondary-600 transition-colors"
                        >
                          Message Us
                        </a>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary-900 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-500/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Reclaim Your Confident
              <br />
              <span className="text-secondary-500 font-medium italic">Radiant Smile</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-light">
              Quality dental care shouldn't be a luxury. Schedule your consultation today and experience premium care at transparent prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                as={Link}
                to="/contact"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-10 h-16 rounded-2xl shadow-xl shadow-secondary-500/20"
              >
                Book Appointment
              </Button>
              <Button
                href="https://wa.me/923009206148"
                variant="outline"
                size="lg"
                className="border-neutral-700 text-white hover:bg-white/5 h-16 px-10 rounded-2xl"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
