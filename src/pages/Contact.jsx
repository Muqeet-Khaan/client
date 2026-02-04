import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Consultation',
    'Dental Implant',
    'Root Canal',
    'Scaling & Polishing',
    'Crown & Bridge',
    'Orthodontics',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="p-12 shadow-lg">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-3xl font-light text-primary-900 dark:text-white mb-4">
              Thank You!
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              We've received your appointment request. Our team will contact you within 24 hours to confirm your booking.
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => setSubmitted(false)}
                variant="primary"
                fullWidth
                className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
              >
                Send Another Request
              </Button>
              <Button
                as="a"
                href="/"
                variant="outline"
                fullWidth
                className="border-secondary-500 text-secondary-500 hover:bg-secondary-500/10"
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

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
              Let's Connect
              <br />
              <span className="text-secondary-500">Book Your Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Schedule your personalized consultation with our expert team. We're here to answer your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Multiple ways to reach us and schedule your appointment
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* WhatsApp */}
                <Card className="p-6 hover:border-secondary-500 transition-all group">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/40 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Instant messaging for quick scheduling
                      </p>
                      <a
                        href="https://wa.me/923009206148"
                        className="inline-flex items-center text-green-600 dark:text-green-400 font-medium text-sm hover:translate-x-1 transition-transform"
                      >
                        Chat Now <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="p-6 hover:border-secondary-500 transition-all group">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg group-hover:bg-secondary-200 dark:group-hover:bg-secondary-900/40 transition-colors">
                      <Phone className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                        Call Us
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Speak directly with our team
                      </p>
                      <a
                        href="tel:+923009206148"
                        className="inline-flex items-center text-secondary-600 dark:text-secondary-400 font-medium text-sm hover:translate-x-1 transition-transform"
                      >
                        +92 300 920 6148 <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 hover:border-secondary-500 transition-all group">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        Detailed inquiries and requests
                      </p>
                      <a
                        href="mailto:info@shirazidentalcare.com"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:translate-x-1 transition-transform"
                      >
                        Email Us <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Hours */}
                <Card className="p-6 hover:border-secondary-500 transition-all group">
                  <div className="flex space-x-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-900/40 transition-colors">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 dark:text-white mb-3">
                        Office Hours
                      </h3>
                      <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 2:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Location Card */}
              <Card className="p-6 border-2 border-secondary-500/30 bg-secondary-500/5">
                <div className="flex space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Rawal Pindi, Karachi, Pakistan<br />
                      Luxury Dental Care Center
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-10 shadow-lg sticky top-24">
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-primary-900 dark:text-white mb-2">
                    Quick Booking Form
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Tell us about your needs and we'll confirm your appointment
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-primary-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* WhatsApp Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary-900 dark:text-white mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="+92 333 1234567"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-primary-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-primary-900 dark:text-white mb-2">
                      Service Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-primary-900 dark:text-white focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary-900 dark:text-white mb-2">
                      Additional Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your dental needs or preferences..."
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-primary-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Info Box */}
                  <div className="bg-secondary-500/10 border border-secondary-500/30 rounded-lg p-4">
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      We'll contact you within 24 hours to confirm your appointment. Your information is secure and confidential.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={loading}
                    icon={<Send size={20} />}
                    className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold"
                  >
                    {loading ? 'Sending...' : 'Request Appointment'}
                  </Button>

                  {/* WhatsApp Alternative */}
                  <Button
                    as="a"
                    href="https://wa.me/923009206148"
                    variant="outline"
                    size="lg"
                    fullWidth
                    icon={<MessageCircle size={20} />}
                    className="border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/10"
                  >
                    Quick Booking via WhatsApp
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-primary-900 dark:text-white tracking-tight mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Located in the heart of Rawal Pindi, Karachi
            </p>
          </motion.div>

          <Card className="overflow-hidden h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.0197088177254!2d52.52897!3d29.61267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6d82e0d8c5c6e1%3A0x5d2f9b5b5b5b5b5b!2sShiraz%2C%20Iran!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shirazi Dental Care Location"
            />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
