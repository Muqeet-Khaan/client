import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Gallery = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const beforeAfterCases = [
    {
      id: 1,
      title: 'Full Mouth Rehabilitation',
      description: 'Complete restoration transforming smile aesthetics and function',
      beforeImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1609618198351-e378d64f9f9d?w=400&h=300&fit=crop',
      procedures: ['Crown Work', 'Root Canal', 'Scaling & Polishing'],
    },
    {
      id: 2,
      title: 'Advanced Orthodontic Alignment',
      description: 'Sophisticated alignment for perfect bite and facial symmetry',
      beforeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      procedures: ['Orthodontics', 'Precision Alignment'],
    },
    {
      id: 3,
      title: 'Implant Integration',
      description: 'Natural-looking replacement tooth with perfect integration',
      beforeImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1537368191519-91f2cda2477a?w=400&h=300&fit=crop',
      procedures: ['Dental Implant', 'Crown Placement'],
    },
    {
      id: 4,
      title: 'Cosmetic Smile Enhancement',
      description: 'Brightening and reshaping for a radiant, confident smile',
      beforeImage: 'https://images.unsplash.com/photo-1532092519694-18a6ad7a5342?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1607346256330-dee4af15f7cb?w=400&h=300&fit=crop',
      procedures: ['Whitening', 'Composite Fillings'],
    },
    {
      id: 5,
      title: 'Bridge Restoration',
      description: 'Seamless gap closure with aesthetic and functional restorations',
      beforeImage: 'https://images.unsplash.com/photo-1576091160559-2173dba999ef?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600554297505-314fdf37f666?w=400&h=300&fit=crop',
      procedures: ['Bridge Work', 'Crown & Bridge'],
    },
    {
      id: 6,
      title: 'Complete Smile Makeover',
      description: 'Comprehensive transformation combining multiple advanced treatments',
      beforeImage: 'https://images.unsplash.com/photo-1609618198351-e378d64f9f9d?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop',
      procedures: ['Multiple Procedures', 'Custom Treatment Plan'],
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
              Smile Gallery
              <br />
              <span className="text-secondary-500">Before & After</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Real results from real patients. See the transformations we create every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCase(caseItem)}
                className="group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 md:h-80">
                      {/* Before Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={caseItem.beforeImage}
                          alt="Before"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* After Image (Overlay) */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={caseItem.afterImage}
                          alt="After"
                          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Before/After Label */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-secondary-500 text-primary-900 px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Transformation
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                      {caseItem.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {caseItem.description}
                    </p>

                    {/* Procedures Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {caseItem.procedures.map((proc) => (
                        <span
                          key={proc}
                          className="text-xs bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 px-3 py-1 rounded-full border border-secondary-500/20"
                        >
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Case Details */}
      {selectedCase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-neutral-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="sticky top-4 right-4 float-right z-10 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-4xl font-light text-primary-900 dark:text-white mb-3">
                  {selectedCase.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  {selectedCase.description}
                </p>
              </div>

              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">BEFORE</p>
                  <img
                    src={selectedCase.beforeImage}
                    alt="Before"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">AFTER</p>
                  <img
                    src={selectedCase.afterImage}
                    alt="After"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Procedures Used */}
              <div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-4">
                  Procedures Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCase.procedures.map((proc) => (
                    <div
                      key={proc}
                      className="bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 px-4 py-2 rounded-lg border border-secondary-500/30"
                    >
                      {proc}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Ready to achieve your own transformation?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as="a"
                    href="/contact"
                    variant="primary"
                    className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    href="https://wa.me/923338353771"
                    variant="outline"
                    className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
                  >
                    WhatsApp Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
              Your Transformation Awaits
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Let's create your before-and-after story. Schedule your consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
              >
                Book Now
              </Button>
              <Button
                href="https://wa.me/923338353771"
                variant="outline"
                size="lg"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
              >
                WhatsApp Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
