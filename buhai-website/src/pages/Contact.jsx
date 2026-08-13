import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Check,
  AlertCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@buhai.com',
    href: 'mailto:hello@buhai.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 AI Street, Tech City, CA 94025',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: '#',
  },
];

const faqs = [
  {
    question: 'What services does BuhAI offer?',
    answer: 'We offer a comprehensive range of AI services including machine learning, natural language processing, computer vision, AI application development, data analytics, and more.',
  },
  {
    question: 'How long does it take to develop an AI solution?',
    answer: 'The timeline varies depending on the complexity of the project. Simple solutions can take a few weeks, while more complex systems may take several months. We provide detailed timelines during our consultation phase.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer: 'Yes, we provide comprehensive support and maintenance services to ensure your AI solutions continue to perform optimally. Our support packages are tailored to your specific needs.',
  },
  {
    question: 'Can you integrate AI into our existing systems?',
    answer: 'Absolutely! We specialize in integrating AI solutions into existing workflows and systems. Our team will work with you to ensure seamless integration with minimal disruption.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, education, retail, manufacturing, and more. Our AI solutions are customizable to meet the unique needs of any industry.',
  },
  {
    question: 'How can I get started with BuhAI?',
    answer: 'Getting started is easy! Simply contact us through our website or give us a call. We offer free consultations to discuss your needs and how our AI solutions can help your business.',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to start your AI journey? Our team is here to help.
              Reach out to us and let's discuss how we can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                variants={item}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  <info.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                <a
                  href={info.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                >
                  {info.content}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Send a Message
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                We'd Love to <span className="gradient-text">Hear From You</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
                We typically respond within 24 hours.
              </p>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.div variants={item} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Personalized Service</h4>
                    <p className="text-gray-600 text-sm">Dedicated account manager for your project</p>
                  </div>
                </motion.div>
                <motion.div variants={item} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Response</h4>
                    <p className="text-gray-600 text-sm">24-hour response time guarantee</p>
                  </div>
                </motion.div>
                <motion.div variants={item} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Confidential</h4>
                    <p className="text-gray-600 text-sm">Your information is always secure with us</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">Your message has been sent successfully.</p>
                  <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        rows={5}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our AI services
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                variants={item}
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeFaq === index ? 'auto' : 0, 
                    opacity: activeFaq === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="h-96 bg-gray-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 opacity-50" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office Location</h3>
                <p className="text-gray-600 mt-2">123 AI Street, Tech City, CA 94025</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-xl font-medium"
                >
                  Get Directions
                </motion.button>
              </div>
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
              Ready to Start?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something <span className="text-primary-200">Amazing Together</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a free consultation and discover how our AI
              solutions can transform your business.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                Send Email
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
