import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Rocket, 
  Zap,
  Database,
  Cloud,
  Shield,
  Search,
  MessageSquare,
  BarChart3,
  Settings,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Users,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    category: 'AI Solutions',
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models for predictive analytics, classification, and clustering',
    features: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Neural Networks'],
    color: 'from-primary-400 to-primary-600',
  },
  {
    category: 'AI Solutions',
    icon: Search,
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment detection, and chatbots',
    features: ['Text Classification', 'Sentiment Analysis', 'Chatbots', 'Language Translation'],
    color: 'from-accent-400 to-accent-600',
  },
  {
    category: 'AI Solutions',
    icon: Zap,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and video analysis solutions',
    features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
    color: 'from-green-400 to-green-600',
  },
  {
    category: 'Development',
    icon: Code,
    title: 'AI Application Development',
    description: 'End-to-end development of AI-powered applications',
    features: ['Custom AI Apps', 'API Integration', 'Microservices', 'Scalable Architecture'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    category: 'Development',
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Quickly validate your AI ideas with our prototyping services',
    features: ['Proof of Concept', 'MVP Development', 'Iterative Testing', 'Feedback Integration'],
    color: 'from-pink-400 to-pink-600',
  },
  {
    category: 'Development',
    icon: Settings,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your existing systems',
    features: ['API Integration', 'Legacy System Upgrade', 'Workflow Automation', 'Data Pipeline'],
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    category: 'Data',
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions',
    features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Real-time Reporting'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    category: 'Data',
    icon: BarChart3,
    title: 'Big Data Solutions',
    description: 'Handle large-scale data with our big data processing solutions',
    features: ['Data Warehousing', 'ETL Pipelines', 'Data Lake', 'Stream Processing'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    category: 'Data',
    icon: Shield,
    title: 'Data Security',
    description: 'Ensure your data is secure with our comprehensive security solutions',
    features: ['Encryption', 'Access Control', 'Threat Detection', 'Compliance'],
    color: 'from-emerald-400 to-emerald-600',
  },
];

const industries = [
  { icon: Users, title: 'Healthcare', description: 'AI solutions for diagnostics, patient care, and hospital management' },
  { icon: TrendingUp, title: 'Finance', description: 'AI-powered financial analysis, fraud detection, and risk management' },
  { icon: Lightbulb, title: 'Education', description: 'Personalized learning, automated grading, and student analytics' },
  { icon: Cloud, title: 'Retail', description: 'AI for inventory management, customer insights, and personalized marketing' },
  { icon: MessageSquare, title: 'Customer Service', description: 'AI chatbots, sentiment analysis, and automated support systems' },
  { icon: Settings, title: 'Manufacturing', description: 'Predictive maintenance, quality control, and process optimization' },
];

const processSteps = [
  {
    step: '01',
    icon: Lightbulb,
    title: 'Consultation',
    description: 'We discuss your needs and goals to understand your vision',
  },
  {
    step: '02',
    icon: Search,
    title: 'Analysis',
    description: 'We analyze your requirements and propose the best AI solutions',
  },
  {
    step: '03',
    icon: Code,
    title: 'Development',
    description: 'Our team builds custom AI solutions tailored to your requirements',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Deployment',
    description: 'We implement and integrate the solutions into your workflow',
  },
  {
    step: '05',
    icon: Shield,
    title: 'Support',
    description: 'We provide ongoing support and maintenance for your AI solutions',
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

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('services');

  const categories = ['all', 'AI Solutions', 'Development', 'Data'];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs. From machine learning
              to data analytics, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 card-hover overflow-hidden"
              >
                <div className={`h-2 ${service.color} bg-gradient-to-r`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary-600 font-medium flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored to meet the unique needs of various industries
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures successful AI implementation every time
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose <span className="gradient-text">BuhAI</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with exceptional service to deliver
                results that exceed your expectations.
              </p>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Sparkles, title: 'Innovative', description: 'Cutting-edge AI technology' },
                  { icon: Users, title: 'Experienced', description: '10+ years in AI development' },
                  { icon: TrendingUp, title: 'Proven', description: '500+ successful projects' },
                  { icon: Heart, title: 'Passionate', description: 'We love what we do' },
                ].map((item, index) => (
                  <motion.div
                    variants={item}
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 mt-8"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Our Promise</h3>
                  <p className="text-white/80">
                    We deliver innovative AI solutions that drive real business value
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-white/80 text-sm">Clients</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/80 text-sm">Projects</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-white/80 text-sm">Years</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Discover how our AI solutions can help you achieve your business goals.
              Get in touch with our experts today.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                View All Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
