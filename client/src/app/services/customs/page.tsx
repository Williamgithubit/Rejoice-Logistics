'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Shield, Clock, Users, Globe, CheckCircle, ArrowRight, Scale, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CustomsPage() {
  const features = [
    {
      icon: FileText,
      title: 'Documentation Services',
      description: 'Complete preparation and processing of all customs documentation and paperwork.'
    },
    {
      icon: Scale,
      title: 'Compliance Management',
      description: 'Ensure full compliance with international trade regulations and customs laws.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Expedited customs clearance to minimize delays and reduce costs.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Knowledge of customs procedures across multiple countries and regions.'
    },
    {
      icon: BookOpen,
      title: 'Tariff Classification',
      description: 'Accurate HS code classification and duty calculation services.'
    },
    {
      icon: Award,
      title: 'Licensed Brokers',
      description: 'Certified customs brokers with extensive experience and credentials.'
    }
  ];

  const services = [
    {
      title: 'Import Clearance',
      description: 'Complete import customs clearance services including documentation, duty payment, and compliance verification.',
      icon: FileText,
      features: ['Import documentation', 'Duty calculation', 'Compliance verification', 'Release coordination']
    },
    {
      title: 'Export Clearance',
      description: 'Export customs clearance services ensuring proper documentation and regulatory compliance.',
      icon: Globe,
      features: ['Export documentation', 'License verification', 'Regulatory compliance', 'Shipping coordination']
    },
    {
      title: 'Trade Consulting',
      description: 'Expert consulting on trade regulations, duty optimization, and compliance strategies.',
      icon: Users,
      features: ['Regulatory consulting', 'Duty optimization', 'Trade compliance', 'Risk assessment']
    }
  ];

  const benefits = [
    'Reduce customs delays and associated costs',
    'Expert knowledge of international trade regulations',
    'Accurate documentation and compliance management',
    'Competitive rates for customs brokerage services',
    'Dedicated support throughout the clearance process',
    'Risk mitigation and compliance assurance'
  ];

  const stats = [
    { number: '10K+', label: 'Clearances Processed' },
    { number: '99.9%', label: 'Compliance Rate' },
    { number: '24hr', label: 'Average Clearance' },
    { number: '50+', label: 'Countries Covered' }
  ];

  const documents = [
    'Commercial Invoice',
    'Packing List',
    'Bill of Lading/Airway Bill',
    'Certificate of Origin',
    'Import/Export Licenses',
    'Insurance Documents',
    'Inspection Certificates',
    'Customs Declaration Forms'
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
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-2xl">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customs <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Clearance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional customs brokerage services with expert knowledge of international 
              trade regulations and fast, compliant clearance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact#quote">Get Clearance Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Consult Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customs Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive customs clearance and trade compliance services to ensure 
              smooth international shipping operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Required Documentation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our customs experts handle all required documentation to ensure smooth 
                clearance processes and full regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((document, index) => (
                  <motion.div
                    key={document}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 group">
                  <Link href="/contact#quote" className="flex items-center">
                    Get Clearance Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Customs documentation"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Customs Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert customs brokerage with licensed professionals and proven track record 
              of successful clearances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Customs Clearance?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our licensed customs brokers handle your clearance requirements 
              with expertise and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact#quote">Get Quote</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Consult Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
