import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  CheckCircle,
  Shield,
  Zap,
  Award,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const serviceCategories = [
    {
      id: 'general',
      name: 'General & Preventive',
      icon: <CheckCircle className="w-6 h-6" />,
      description: 'Foundation of oral health through prevention and maintenance',
      services: [
        {
          title: 'Scaling & Polishing',
          description: 'Deep professional cleaning to reveal your teeth\'s natural radiance and vitality.',
          details: [
            'Removes tartar and plaque buildup',
            'Polishes teeth for natural shine',
            'Prevents gum disease',
            'Takes approximately 45-60 minutes',
          ],
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Dental Fillings',
          description: 'Premium, durable materials (GIC, Composite, Amalgam) for invisible, long-lasting repairs.',
          details: [
            'Composite fillings match tooth color',
            'Durable and long-lasting',
            'Restores tooth functionality',
            'Aesthetic and invisible restoration',
          ],
          icon: <Award className="w-6 h-6" />,
        },
        {
          title: 'Dental X-Ray',
          description: 'High-resolution digital imaging for accurate diagnostics with minimal exposure.',
          details: [
            'Advanced digital imaging technology',
            'Minimal radiation exposure',
            'Detects hidden decay and issues',
            'Aids in treatment planning',
          ],
          icon: <Shield className="w-6 h-6" />,
        },
        {
          title: 'Primary Tooth Pulpectomy',
          description: 'Gentle pediatric expertise to protect and preserve your child\'s developing smile.',
          details: [
            'Specialized pediatric care',
            'Preserves baby teeth',
            'Prevents infection spread',
            'Guides permanent tooth development',
          ],
          icon: <Zap className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 'restorative',
      name: 'Restorative',
      icon: <Shield className="w-6 h-6" />,
      description: 'Repair and restoration of compromised or missing teeth',
      services: [
        {
          title: 'Root Canal Treatment',
          description: 'Painless, meticulous therapy to preserve your natural tooth and restore peace of mind.',
          details: [
            'Eliminates tooth pain and infection',
            'Preserves natural tooth',
            'Advanced pain management',
            'Saves tooth that might otherwise be lost',
          ],
          icon: <Shield className="w-6 h-6" />,
        },
        {
          title: 'Post & Core Build-Up',
          description: 'Reinforcing compromised teeth for enduring strength and crown-ready stability.',
          details: [
            'Strengthens weak teeth',
            'Prepares tooth for crown',
            'Restores tooth structure',
            'Ensures long-term durability',
          ],
          icon: <Award className="w-6 h-6" />,
        },
        {
          title: 'Tooth Extraction',
          description: 'Gentle, precise removal with advanced comfort techniques for swift recovery.',
          details: [
            'Advanced extraction techniques',
            'Minimal trauma approach',
            'Comprehensive aftercare guidance',
            'Swift and comfortable recovery',
          ],
          icon: <CheckCircle className="w-6 h-6" />,
        },
        {
          title: 'Crown & Bridge Work',
          description: 'Bespoke, lifelike restorations that seamlessly blend function, beauty, and durability.',
          details: [
            'Custom-crafted restorations',
            'Natural-looking appearance',
            'Restores full function',
            'Long-lasting and durable',
          ],
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Removable Partial Denture',
          description: 'Discreet, comfortable solutions designed for effortless aesthetics and ease.',
          details: [
            'Custom-fitted design',
            'Discreet and comfortable',
            'Restores chewing function',
            'Affordable tooth replacement',
          ],
          icon: <Shield className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 'specialized',
      name: 'Specialized',
      icon: <Zap className="w-6 h-6" />,
      description: 'Advanced cosmetic and surgical solutions',
      services: [
        {
          title: 'Dental Implants',
          description: 'Permanent, natural-feeling tooth replacements that reclaim confidence and complete oral harmony.',
          details: [
            'Permanent tooth solution',
            'Natural appearance and feel',
            'Preserves jawbone',
            'Restores full chewing power',
          ],
          icon: <Award className="w-6 h-6" />,
        },
        {
          title: 'Orthodontic Services',
          description: 'Sophisticated alignment solutions to enhance bite, symmetry, and facial elegance.',
          details: [
            'Modern orthodontic techniques',
            'Enhances bite and alignment',
            'Improves facial aesthetics',
            'Comprehensive treatment planning',
          ],
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Crown Cementation',
          description: 'Flawless, secure placement for optimal alignment and lasting performance.',
          details: [
            'Precise placement technique',
            'Optimal alignment',
            'Permanent bonding',
            'Ensures crown longevity',
          ],
          icon: <CheckCircle className="w-6 h-6" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
              Our Services
              <br />
              <span className="text-secondary-500">Service Directory</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Complete dental solutions organized by treatment type. Explore our comprehensive service menu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Menu - Accordion Style */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setExpandedCategory(category.id)}
                className={`flex-1 p-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  expandedCategory === category.id
                    ? 'bg-secondary-500 text-primary-900 shadow-lg'
                    : 'bg-white dark:bg-neutral-700 text-primary-900 dark:text-white border border-neutral-200 dark:border-neutral-600 hover:border-secondary-500'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Services Content */}
          <AnimatePresence mode="wait">
            {serviceCategories.map((category) => (
              expandedCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="space-y-3 mb-12">
                    <h2 className="text-4xl font-light text-primary-900 dark:text-white">
                      {category.name}
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                      {category.description}
                    </p>
                    <div className="w-12 h-0.5 bg-secondary-500" />
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full p-8 hover:border-secondary-500 hover:shadow-lg transition-all duration-300 group">
                          <div className="space-y-4">
                            {/* Service Icon and Title */}
                            <div className="space-y-3">
                              <div className="inline-flex p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg group-hover:bg-secondary-500/10 transition-colors">
                                <div className="text-secondary-500">{service.icon}</div>
                              </div>
                              <h3 className="text-2xl font-semibold text-primary-900 dark:text-white">
                                {service.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                              {service.description}
                            </p>

                            {/* Key Points */}
                            <ul className="space-y-2 py-4">
                              {service.details.map((detail, i) => (
                                <li key={i} className="flex items-start space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                                  <span className="text-secondary-500 font-bold mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Learn More Link */}
                            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                              <a
                                href="#contact"
                                className="inline-flex items-center text-secondary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                              >
                                Learn More <ArrowRight size={16} className="ml-2" />
                              </a>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Schedule your consultation today and let's create your personalized treatment plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
              >
                Book Consultation
              </Button>
              <Button
                href="https://wa.me/923338353771"
                variant="outline"
                size="lg"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
              >
                Contact via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
