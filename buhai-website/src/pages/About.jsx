import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Sparkles,
  TrendingUp,
  Globe,
  Clock,
  ArrowRight
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    avatar: 'AJ',
    description: 'Visionary leader with 15+ years in AI and technology',
    color: 'from-primary-400 to-primary-600',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    avatar: 'SC',
    description: 'AI expert and machine learning specialist',
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    avatar: 'MR',
    description: 'Full-stack developer with AI integration expertise',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Emily Wilson',
    role: 'Product Manager',
    avatar: 'EW',
    description: 'Product strategy and customer success',
    color: 'from-purple-400 to-purple-600',
  },
];

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To democratize AI technology and make it accessible to businesses of all sizes',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in our work',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we deliver',
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'We serve clients worldwide with our innovative solutions',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'BuhAI was established with a vision to revolutionize AI' },
  { year: '2019', title: 'First Product', description: 'Launched our first AI-powered application' },
  { year: '2020', title: 'Expansion', description: 'Expanded our team and client base globally' },
  { year: '2021', title: 'Innovation', description: 'Introduced groundbreaking AI solutions' },
  { year: '2022', title: 'Growth', description: 'Achieved 100+ happy clients worldwide' },
  { year: '2023', title: 'Excellence', description: 'Recognized as industry leader in AI innovation' },
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

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of AI enthusiasts dedicated to creating intelligent
              solutions that transform businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                Who We Are
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                We Are <span className="gradient-text">BuhAI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                BuhAI is a leading AI solutions provider dedicated to helping businesses
                harness the power of artificial intelligence. Our team of experts combines
                cutting-edge technology with industry expertise to deliver solutions that
                drive real results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that AI should be accessible to everyone, not just large enterprises.
                That's why we've made it our mission to democratize AI technology and make it
                available to businesses of all sizes.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Join Our Team</span>
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
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">100+</h3>
                    <p className="text-white/80">Happy Clients</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-white/80">Projects Completed</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-white/80">Support</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-white/80">Awards Won</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We <span className="gradient-text">Believe In</span>
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of AI specialists, developers, and designers work together
              to create amazing solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 card-hover overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 transform -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-5/12" />
                  <div className="w-2/12 flex justify-center">
                    <div className="relative z-10 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Be Part of Our <span className="text-primary-200">Journey</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI.
              Join our team and help us shape the future.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                View Open Positions
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
