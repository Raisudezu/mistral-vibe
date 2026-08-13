import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Briefcase, Mail, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Users },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary-400 to-accent-500 opacity-0 group-hover:opacity-100 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 100 }}
                />
              </motion.div>
              <div>
                <span className="text-2xl font-bold gradient-text">Buh</span>
                <span className="text-2xl font-bold text-gray-800">AI</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div whileHover={{ scale: 1.05 }} key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 md:hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <button className="w-full btn-primary">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
