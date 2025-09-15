'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { QuoteForm } from '@/components/forms/QuoteForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Font Street', 'Monrovia', 'Liberia'],
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+231 777 55 0506', '+231 886 550 506', 'Toll-free: 0800-REJOICE'],
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@rejoicelogistic.com', 'quotes@rejoicelogistic.com', 'support@rejoicelogistic.com'],
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', '24/7 Emergency Support'],
      color: 'text-primary'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Rejoice Logistic</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to optimize your supply chain? Get in touch with our logistics experts 
              for personalized solutions and competitive quotes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${info.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Lagos business district for easy access
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Maps Embed */}
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.761537845935!2d3.4276493!3d6.4300591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d8b8b5c5a3%3A0x5c8b9a8c7c8b4e5f!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1678901234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Rejoice Logistic HQ</span>
              </div>
            </div>

            {/* Contact Details Below Map */}
            <div className="p-8 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Front Street, Monrovia, Liberia</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">+231 777 550 506</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">info@rejoicelogistic.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 mb-4">
              <strong>Parking:</strong> Complimentary parking available for visitors
            </p>
            <p className="text-gray-600">
              <strong>Public Transport:</strong> 5-minute walk from Broad Street
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}