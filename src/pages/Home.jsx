import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle,
  Award,
  Shield,
  Sparkles,
  ArrowRight,
  Heart,
  TrendingUp,
  Zap,
  Users,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  // All 12 luxury dental services
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary-500" />,
      title: 'Tooth Extraction',
      description: 'Gentle, precise removal with advanced comfort techniques for swift recovery.',
      href: '/services/tooth-extraction',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary-500" />,
      title: 'Scaling & Polishing',
      description: 'Deep professional cleaning to reveal your teeth\'s natural radiance and vitality.',
      href: '/services/scaling-polishing',
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary-500" />,
      title: 'Root Canal Treatment',
      description: 'Painless, meticulous therapy to preserve your natural tooth and restore peace of mind.',
      href: '/services/root-canal',
    },
    {
      icon: <Award className="w-8 h-8 text-secondary-500" />,
      title: 'Post & Core Build-Up',
      description: 'Reinforcing compromised teeth for enduring strength and crown-ready stability.',
      href: '/services/post-core',
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary-500" />,
      title: 'Crown & Bridge Work',
      description: 'Bespoke, lifelike restorations that seamlessly blend function, beauty, and durability.',
      href: '/services/crown-bridge',
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary-500" />,
      title: 'Dental Implants',
      description: 'Permanent, natural-feeling tooth replacements that reclaim confidence and complete oral harmony.',
      href: '/services/dental-implants',
    },
    {
      icon: <Users className="w-8 h-8 text-secondary-500" />,
      title: 'Removable Partial Denture',
      description: 'Discreet, comfortable solutions designed for effortless aesthetics and ease.',
      href: '/services/partial-denture',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary-500" />,
      title: 'Dental Fillings',
      description: 'Premium, durable materials (GIC, Composite, Amalgam) for invisible, long-lasting repairs.',
      href: '/services/fillings',
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary-500" />,
      title: 'Primary Tooth Pulpectomy',
      description: 'Gentle pediatric expertise to protect and preserve your child\'s developing smile.',
      href: '/services/pulpectomy',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary-500" />,
      title: 'Crown Cementation',
      description: 'Flawless, secure placement for optimal alignment and lasting performance.',
      href: '/services/crown-cementation',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary-500" />,
      title: 'Orthodontic Services',
      description: 'Sophisticated alignment solutions to enhance bite, symmetry, and facial elegance.',
      href: '/services/orthodontics',
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary-500" />,
      title: 'Dental X-Ray',
      description: 'High-resolution digital imaging for accurate diagnostics with minimal exposure.',
      href: '/services/x-ray',
    },
  ];

  // 5 Hallmarks of Luxury Dentistry
  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6 text-secondary-500" />,
      title: 'Cutting-Edge Technology',
      description: 'Cutting-edge dental technology for precise, efficient outcomes.',
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary-500" />,
      title: 'Sterilization Standards',
      description: 'Rigorous international sterilization and hygiene protocols.',
    },
    {
      icon: <Heart className="w-6 h-6 text-secondary-500" />,
      title: 'Gentle Procedures',
      description: 'Gentle, minimally invasive procedures with maximum comfort.',
    },
    {
      icon: <Award className="w-6 h-6 text-secondary-500" />,
      title: 'Customized Care',
      description: 'Fully customized treatment strategies tailored to your unique needs.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-secondary-500" />,
      title: 'Premium Reputation',
      description: 'Karachi\'s most trusted destination for sophisticated dental care.',
    },
  ];

  const specialists = [
    {
      name: 'Dr. Ahmed Sheikh',
      specialty: 'Oral and Maxillofacial Surgery',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Dr. Tayyab Sheikh',
      specialty: 'Prosthodontics & Endodontics',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Dr. Jawad',
      specialty: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Luxury Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
            alt="Luxury dental clinic interior"
            className="w-full h-full object-cover"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-800/60 to-primary-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight">
              Luxury Dental Care
              <br />
              <span className="text-secondary-400">in Karachi</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-2xl md:text-3xl font-light text-neutral-100 max-w-3xl mx-auto">
              Precision, Comfort & Excellence in Every Smile
            </h2>

            {/* Body Text */}
            <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-light">
              Discover world-class dental care in a serene, impeccably hygienic, and technologically advanced environment. Our expert team blends cutting-edge innovations with bespoke, compassionate treatment to craft exceptional, long-lasting results you can trust and admire.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm pt-4">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-5 h-5 text-secondary-400" />
                <span className="font-medium">Advanced Technology</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-5 h-5 text-secondary-400" />
                <span className="font-medium">Sterilization Standards</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-5 h-5 text-secondary-400" />
                <span className="font-medium">Patient Comfort</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                as={Link}
                to="/book"
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Consultation
              </Button>
              <Button
                variant="primary"
                size="lg"
                icon={<MessageCircle size={20} />}
                href="https://wa.me/923338353771"
                className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              >
                WhatsApp Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 dark:text-white">
              Elevating Oral Health with Uncompromising Excellence
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto">
              At Shirazi Dental Care, we redefine premium dentistry through unwavering commitment to the highest standards of safety, precision, and patient comfort. Our state-of-the-art clinic offers a tranquil sanctuary where every detail is curated for your relaxation and confidence. We prioritize personalized care plans, advanced techniques, and lifelong oral wellness—because your smile is a reflection of elegance and vitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Hallmarks of Luxury */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 dark:text-white mb-6">
              The Hallmarks of True Luxury Dentistry
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Five defining principles that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - All 12 Services */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 dark:text-white mb-6">
              Our Signature Dental Services
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Comprehensive, luxury dental care for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full p-8 text-center group cursor-pointer hover:shadow-lg transition-all">
                  <Link to={service.href}>
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl group-hover:bg-secondary-50 dark:group-hover:bg-secondary-900/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety Banner */}
      <section className="py-16 bg-primary-900 dark:bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Your Safety, Our Obsession
            </h2>
            <p className="text-lg text-neutral-100 max-w-3xl mx-auto leading-relaxed">
              We adhere strictly to global sterilization standards, creating an impeccably clean, infection-free haven for every visit. Your wellbeing is paramount to everything we do.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-secondary-500/20 px-6 py-3 rounded-full border border-secondary-400/50">
                <Shield className="w-5 h-5 text-secondary-400" />
                <span className="font-medium">ISO Certified & Internationally Accredited</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Specialists Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-900 dark:text-white mb-6">
              Meet Our Specialists
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Our experienced team of dental professionals is here to provide you with the highest quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-secondary-200 dark:border-secondary-800"
                  />
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                    {specialist.name}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-4">
                    {specialist.specialty}
                  </p>
                  <Button
                    as={Link}
                    to="/book"
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    Book Appointment
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              as={Link}
              to="/specialists"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              View All Specialists
            </Button>
          </div>
        </div>
      </section>

      {/* Main CTA Section - Premium */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Your Smile Deserves Nothing Less Than Extraordinary
            </h2>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed">
              Step into premium care tailored just for you. Schedule today and experience the difference of true luxury dentistry in Karachi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/book"
                variant="secondary"
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<MessageCircle size={20} />}
                href="https://wa.me/923338353771"
                className="border-white text-white hover:bg-white/10 font-bold"
              >
                WhatsApp Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:03338353771"
                className="border-white text-white hover:bg-white/10 font-bold"
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
