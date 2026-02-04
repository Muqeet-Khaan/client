import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Calendar, Moon, Sun, MessageCircle } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../ui/Button'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Specialists', href: '/specialists' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/98 dark:bg-neutral-900/98 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-700/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5b1d42f14a4747cbba3cfd3ccbd5b3b4%2F229c45bd6ec0487199c78d88b663e275?format=webp&width=200&height=200"
              alt="Shirazi Dental Care Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-primary-900 dark:text-white font-bold text-sm leading-tight">
                Shirazi
                <br />
                <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Dental Care</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  isActive(item.href)
                    ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 shadow-sm'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-secondary-600 dark:hover:text-secondary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions - Right Side */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/923338353771"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-semibold bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle size={16} className="text-green-600 dark:text-green-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Book Appointment CTA */}
            <Button
              as={Link}
              to="/book"
              variant="primary"
              size="sm"
              icon={<Calendar size={16} />}
              className="bg-secondary-500 hover:bg-secondary-600 text-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 dark:bg-neutral-900/98 backdrop-blur-md border-t border-neutral-200/80 dark:border-neutral-700/80 shadow-lg"
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 transform active:scale-95 ${
                    isActive(item.href)
                      ? 'text-secondary-700 bg-secondary-100 dark:text-secondary-300 dark:bg-secondary-900/30 shadow-sm border border-secondary-200 dark:border-secondary-800'
                      : 'text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-secondary-600 dark:hover:text-secondary-400 border border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 space-y-3">
                {/* Mobile WhatsApp Contact */}
                <a
                  href="https://wa.me/923338353771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-3 text-sm font-semibold bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-2 border-green-200 dark:border-green-700 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-800 dark:hover:text-green-200 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={18} className="text-green-600 dark:text-green-400" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Button
                  variant="primary"
                  fullWidth
                  icon={<Calendar size={16} />}
                  as={Link}
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="shadow-sm"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
