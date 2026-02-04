import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Zap,
  Heart,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const About = () => {
  const safetyStandards = [
    {
      title: 'Sterilization Protocol',
      items: ['Autoclave 134°C 18 minutes', 'Daily biological testing', 'ISO 13485 compliant equipment'],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Infection Control',
      items: ['Single-use instruments', 'Barrier protection on all surfaces', 'Personal protective equipment protocols'],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Patient Safety',
      items: ['Comprehensive health screening', 'Allergy documentation', 'Emergency preparedness training'],
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Quality Assurance',
      items: ['Regular equipment maintenance', 'Staff competency verification', 'Continuous improvement audits'],
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Reza Shirazi',
      title: 'Lead Oral Surgeon',
      specialty: 'Restorative & Cosmetic Dentistry',
      experience: '20+ Years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      bio: 'Dr. Shirazi is a highly respected oral surgeon with over 20 years of experience in complex restorative and cosmetic dentistry. His meticulous approach and dedication to patient comfort have earned him recognition as one of the region\'s leading dental professionals.',
      qualifications: ['DMD - International Dental Association', 'Certified Implantologist', 'Advanced Cosmetic Dentistry', 'Published Researcher'],
    },
    {
      name: 'Dr. Fatima Hassan',
      title: 'Orthodontics Specialist',
      specialty: 'Orthodontics & Alignment',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      bio: 'Dr. Hassan specializes in creating beautiful, aligned smiles using the latest orthodontic technologies. Her patient-centered approach ensures comfortable treatment experiences.',
      qualifications: ['DMD - Orthodontic Specialty', 'Invisalign Certified', 'Advanced Braces Training', 'Pediatric Dentistry'],
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
              About Us
              <br />
              <span className="text-secondary-500">Our Authority</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Clinical excellence meets patient-centered care. Discover what sets us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight">
                Our Vision for Shiraz
              </h2>
              <div className="w-12 h-0.5 bg-secondary-500 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Shirazi Dental Care represents a paradigm shift in how premium dental care is delivered. We envision 
                  a Shiraz where exceptional oral health is accessible to those who demand the highest standards.
                </p>

                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Our commitment goes beyond treating symptoms. We focus on long-term oral wellness, personalized 
                  treatment strategies, and creating transformative smile experiences that build confidence and improve lives.
                </p>

                <div className="space-y-4 pt-4">
                  {['Transformative patient outcomes', 'Unwavering safety standards', 'Advanced clinical expertise'].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary-500/10 rounded-lg p-8 border border-secondary-500/20"
              >
                <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-3 uppercase tracking-wider">
                  Our Mission
                </p>
                <p className="text-2xl font-light text-primary-900 dark:text-white leading-relaxed">
                  "To deliver world-class dental care through innovation, expertise, and unwavering commitment to patient excellence, 
                  redefining what luxury dentistry means in Shiraz."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
              Meet Our Experts
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Led by internationally recognized dental specialists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-secondary-300">{member.title}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-2 uppercase tracking-wider">
                          {member.specialty}
                        </p>
                        <p className="text-2xl font-light text-primary-900 dark:text-white">
                          {member.experience}
                        </p>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Qualifications */}
                      <div>
                        <p className="font-semibold text-primary-900 dark:text-white mb-3">Key Qualifications</p>
                        <ul className="space-y-2">
                          {member.qualifications.map((qual) => (
                            <li key={qual} className="flex items-start space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                              <span className="text-secondary-500 mt-1">•</span>
                              <span>{qual}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Safety Standards */}
      <section className="py-20 md:py-32 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-primary-900 dark:text-white tracking-tight mb-6">
              International Safety
              <br />
              <span className="text-secondary-500">Standards</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Rigorous protocols exceed global standards for infection control and patient safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:border-secondary-500 transition-all group">
                  <div className="space-y-4">
                    <div className="inline-flex p-3 bg-secondary-500/10 rounded-lg group-hover:bg-secondary-500/20 transition-colors">
                      <div className="text-secondary-500">{standard.icon}</div>
                    </div>

                    <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
                      {standard.title}
                    </h3>

                    <ul className="space-y-2">
                      {standard.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-neutral-600 dark:text-neutral-300">
                          <span className="text-secondary-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-700"
          >
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
              Certified and Accredited by:
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['ISO 9001:2015', 'ISO 13485', 'CDC Certified', 'OSHA Compliant', 'WHO Aligned'].map((cert) => (
                <div key={cert} className="px-6 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <p className="font-semibold text-primary-900 dark:text-white text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary-900 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Experience the Shirazi
              <br />
              <span className="text-secondary-500">Difference</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Schedule your consultation with our team of experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                as="a"
                href="/contact"
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

export default About;
