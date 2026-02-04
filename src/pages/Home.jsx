import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Smile,
  Shield,
  Zap,
  Award,
  Heart,
  ArrowRight,
  Star,
  Check,
  Diamond,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {

  // Patient Testimonials
  const testimonials = [
    {
      name: 'Fatima Ahmed',
      title: 'Patient',
      text: 'The level of care and attention at Shirazi Dental Care is unmatched. I felt safe and confident throughout my treatment.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Hassan Khan',
      title: 'Patient',
      text: 'Professional, clean, and luxurious. Every detail reflects excellence. Highly recommended for anyone seeking premium dental care.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Aisha Malik',
      title: 'Patient',
      text: 'The sterilization standards and modern equipment give me complete peace of mind. This is dentistry done right.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section - Minimalist Luxury */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          {/* Premium Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/75 via-primary-900/65 to-primary-900/75"></div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-5">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white dark:text-neutral-50 tracking-tight">
              The Art of
              <br />
              <span className="text-secondary-500">Precision Dentistry</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-neutral-300 dark:text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Luxury dental care meets cutting-edge science. Experience the Shirazi difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold px-8"
              >
                Book Appointment
              </Button>
              <Button
                as="a"
                href="https://wa.me/923009206148"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10 font-semibold px-8"
              >
                WhatsApp Now
              </Button>
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center gap-8 text-sm pt-8"
            >
              <div className="flex items-center space-x-2 text-neutral-300">
                <Shield className="w-4 h-4 text-secondary-500" />
                <span>ISO Certified</span>
              </div>
              <div className="w-px h-4 bg-neutral-700" />
              <div className="flex items-center space-x-2 text-neutral-300">
                <Award className="w-4 h-4 text-secondary-500" />
                <span>20+ Years</span>
              </div>
              <div className="w-px h-4 bg-neutral-700" />
              <div className="flex items-center space-x-2 text-neutral-300">
                <Star className="w-4 h-4 text-secondary-500" />
                <span>5-Star Rated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border border-secondary-500 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-secondary-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Clinic Philosophy Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight">
                Clinical Excellence
                <br />
                <span className="text-secondary-500">Defined</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                At Shirazi Dental Care, we believe that true luxury is found in the details. From our internationally 
                certified sterilization protocols to our personalized treatment plans, every aspect of your care reflects 
                our commitment to excellence.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { title: 'Precision', desc: 'Advanced technology, expert hands' },
                { title: 'Safety', desc: 'Rigorous sterilization standards' },
                { title: 'Comfort', desc: 'Gentle, minimally invasive care' },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-2xl font-semibold text-primary-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{pillar.desc}</p>
                  <div className="w-12 h-0.5 bg-secondary-500 mx-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Shirazi Dental Care Section */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
              Hallmarks of Premium Care
              <br />
              <span className="text-secondary-500">at Shirazi Dental</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Advanced Technology',
                desc: 'Precise, minimally invasive treatments using cutting-edge equipment',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Strict Sterilization',
                desc: 'International protocols ensuring complete safety for every procedure',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: 'Gentle Care',
                desc: 'Comfortable procedures prioritizing your peace of mind throughout',
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Expert Leadership',
                desc: 'Dr. Nauman Shirazi—specialist in implants, aligners & cosmetics',
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: 'Trusted Expertise',
                desc: '15+ years of experience with academic leadership in dentistry',
              },
              {
                icon: <Smile className="w-6 h-6" />,
                title: 'Serene Environment',
                desc: 'Modern sanctuary in the heart of Karachi designed for your comfort',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary-500/10 border border-secondary-500/30">
                    <div className="text-secondary-500">{benefit.icon}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Highlights Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
              A Sanctuary of
              <br />
              <span className="text-secondary-500">Modern Dentistry</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Impeccably hygienic, thoughtfully designed—your comfort and safety come first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1631217314831-11245b1b4e41?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1577091160399-112ba68c5c7d?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1576091160550-112698e46601?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1576091160648-112698e46601?w=600&h=400&fit=crop',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <img
                  src={image}
                  alt={`Clinic highlight ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety Banner */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900 relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full -mr-48 -mt-48" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="inline-flex p-3 bg-secondary-500/10 rounded-lg border border-secondary-500/30">
              <Shield className="w-6 h-6 text-secondary-500" />
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
                Your Safety
                <br />
                <span className="text-secondary-500">is Our Priority</span>
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                We adhere to the highest sterilization standards, use single-use tools where possible, and employ digital low-radiation imaging—ensuring every visit is secure and serene.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
              Trusted by Our Patients
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Real voices from satisfied patients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary-500 text-secondary-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-primary-900 dark:text-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Elevate Your Smile with
              <br />
              <span className="text-secondary-500">Shirazi Dental Care</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Discover personalized, premium dental treatment in Rawal Pindi today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
              >
                Book Appointment
              </Button>
              <Button
                as="a"
                href="https://wa.me/923009206148"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
              >
                WhatsApp (+92 300 920 6148)
              </Button>
              <Button
                as="a"
                href="tel:+923009206148"
                variant="outline"
                size="lg"
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
              >
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
