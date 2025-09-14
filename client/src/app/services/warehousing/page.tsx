'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Warehouse, Package, Shield, BarChart3, Truck, Clock, CheckCircle, ArrowRight, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WarehousingPage() {
  const features = [
    {
      icon: Warehouse,
      title: 'Modern Facilities',
      description: 'State-of-the-art warehouse facilities with climate control and security systems.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking and management systems for real-time visibility.'
    },
    {
      icon: Shield,
      title: 'Secure Storage',
      description: '24/7 security monitoring with CCTV surveillance and access control.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed reporting and analytics to optimize your inventory operations.'
    },
    {
      icon: Truck,
      title: 'Distribution Services',
      description: 'Seamless integration with transportation for efficient distribution.'
    },
    {
      icon: Clock,
      title: 'Flexible Operations',
      description: 'Extended operating hours and flexible storage solutions to meet your needs.'
    }
  ];

  const benefits = [
    'Reduce operational costs and overhead expenses',
    'Scalable storage solutions that grow with your business',
    'Professional inventory management and control',
    'Strategic locations for optimal distribution',
    'Advanced WMS (Warehouse Management System)',
    'Pick, pack, and fulfillment services available'
  ];

  const stats = [
    { number: '500K+', label: 'Sq Ft Storage' },
    { number: '99.9%', label: 'Inventory Accuracy' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '48hr', label: 'Order Processing' }
  ];

  const services = [
    {
      title: 'Short-term Storage',
      description: 'Flexible short-term warehousing solutions for seasonal inventory or temporary storage needs.',
      icon: Clock
    },
    {
      title: 'Long-term Storage',
      description: 'Cost-effective long-term storage with dedicated space allocation and inventory management.',
      icon: Warehouse
    },
    {
      title: 'Cross-docking',
      description: 'Efficient cross-docking services to minimize storage time and reduce handling costs.',
      icon: Truck
    },
    {
      title: 'Pick & Pack',
      description: 'Professional order fulfillment services including picking, packing, and shipping.',
      icon: Package
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
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-2xl">
                <Warehouse className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Warehousing <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Secure, efficient warehousing and distribution services with advanced inventory 
              management systems and flexible storage solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact#quote">Get Storage Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Tour Our Facilities</Link>
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

      {/* Services Grid */}
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
              Warehousing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive storage and distribution solutions designed to optimize 
              your supply chain operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern warehouse facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Warehousing?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our modern warehouse facilities provide secure, efficient storage solutions 
                with advanced technology and professional management.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary/90 group">
                  <Link href="/contact#quote" className="flex items-center">
                    Request Storage Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
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
              Need Storage Solutions?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let us help you optimize your inventory management with our secure, 
              modern warehousing facilities.
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
                <Link href="/contact">Schedule Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
