import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code, Brain, Rocket, Zap } from 'lucide-react';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0, 10, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-white" />
        
        {/* Floating Shapes */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-2xl opacity-60"
        />
        <motion.div
          animate={{ ...floatingAnimation, duration: 8 }}
          className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-50"
        />
        <motion.div
          animate={{ ...floatingAnimation, duration: 10 }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary-300 rounded-xl opacity-40"
        />
        <motion.div
          animate={{ ...floatingAnimation, duration: 7 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent-100 rounded-full opacity-50"
        />
        
        {/* Animated Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-96 h-96 rounded-full border border-primary-200"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-[400px] h-[400px] rounded-full border border-primary-100"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] rounded-full border border-primary-50"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Next Generation AI Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Transform Your Business</span>
            <br />
            <span className="text-gray-800">with </span>
            <motion.span
              className="inline-block gradient-text"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              BuhAI
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            We build intelligent applications that learn, adapt, and grow with your business.
            From automation to predictive analytics, we've got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              <span>Learn More</span>
            </motion.button>
          </motion.div>

          {/* Features Preview */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'AI Powered', description: 'Intelligent algorithms that learn and adapt' },
              { icon: Rocket, title: 'Fast Deployment', description: 'Get your AI solutions up and running in days' },
              { icon: Zap, title: 'Lightning Fast', description: 'Optimized for performance and scalability' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <p className="text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1 h-2 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
