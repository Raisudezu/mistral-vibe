import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Rocket, 
  Zap,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  Lightbulb,
  BarChart3,
  Settings
} from 'lucide-react';
import HeroSection from '../components/HeroSection';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models tailored to your business needs',
    color: 'from-primary-400 to-primary-600',
  },
  {
    icon: Code,
    title: 'AI Development',
    description: 'End-to-end AI solution development',
    color: 'from-accent-400 to-accent-600',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Quickly validate your AI ideas',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline your workflows with AI',
    color: 'from-purple-400 to-purple-600',
  },
];

const features = [
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Intuitive interfaces that anyone can use',
  },
  {
    icon: TrendingUp,
    title: 'Scalable',
    description: 'Grows with your business needs',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security',
  },
  {
    icon: Settings,
    title: 'Customizable',
    description: 'Tailored to your specific requirements',
  },
];

const stats = [
  { number: '100+', label: 'Happy Clients' },
  { number: '500+', label: 'Projects Completed' },
  { number: '1000+', label: 'AI Models Deployed' },
  { number: '24/7', label: 'Support' },
];

const testimonials = [
  {
    quote: 'BuhAI transformed our business with their AI solutions. The results have been incredible!',
    name: 'Sarah Johnson',
    title: 'CEO, TechCorp',
    avatar: 'SJ',
  },
  {
    quote: 'The team at BuhAI is simply amazing. They delivered beyond our expectations.',
    name: 'Michael Chen',
    title: 'CTO, Innovate Inc',
    avatar: 'MC',
  },
  {
    quote: 'We saw a 300% increase in efficiency after implementing BuhAI\'s automation solutions.',
    name: 'Emily Rodriguez',
    title: 'Operations Manager, Global Co',
    avatar: 'ER',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions for businesses of all sizes
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 card-hover group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <ArrowRight className="w-5 h-5 text-primary-500" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                Key Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose <span className="gradient-text">BuhAI</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with exceptional service to deliver
                results that exceed your expectations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  variants={item}
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl text-center card-hover"
              >
                <motion.div
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple, streamlined process ensures you get the best AI solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '01',
                icon: Lightbulb,
                title: 'Consultation',
                description: 'We discuss your needs and goals to understand your vision',
              },
              {
                step: '02',
                icon: Settings,
                title: 'Development',
                description: 'Our team builds custom AI solutions tailored to your requirements',
              },
              {
                step: '03',
                icon: Rocket,
                title: 'Deployment',
                description: 'We implement and integrate the solutions into your workflow',
              },
            ].map((step, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
              Ready to Start?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that are already benefiting from our AI solutions.
              Get started today and see the difference.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
