'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Ship, Truck, Shield, Clock, MapPin, CheckCircle, ArrowRight, Package, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FreightForwardingPage() {
  const features = [
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Express and standard air cargo services with global reach and competitive rates.'
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'FCL and LCL container shipping solutions for cost-effective ocean transport.'
    },
    {
      icon: Truck,
      title: 'Door-to-Door',
      description: 'Complete logistics management from pickup to final delivery destination.'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Comprehensive cargo protection and risk management solutions.'
    },
    {
      icon: Clock,
      title: 'Real-time Tracking',
      description: 'Monitor your shipments 24/7 with our advanced tracking system.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive worldwide network of trusted partners and agents.'
    }
  ];

  const benefits = [
    'Competitive freight rates and transparent pricing',
    'Expert handling of customs documentation',
    'Flexible shipping options to meet your timeline',
    'Dedicated account management and support',
    'Advanced cargo tracking and visibility',
    'Comprehensive insurance and risk management'
  ];

  const stats = [
    { number: '50+', label: 'Countries Served' },
    { number: '10K+', label: 'Shipments Annually' },
    { number: '99.8%', label: 'On-time Delivery' },
    { number: '24/7', label: 'Customer Support' }
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
                <Plane className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Freight <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Forwarding</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive international freight forwarding services with competitive rates, 
              reliable transit times, and end-to-end logistics management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact#quote">Get Freight Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Speak with Expert</Link>
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

      {/* Features Section */}
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
              Our Freight Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From air to sea freight, we provide comprehensive shipping solutions 
              tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Freight Services?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in international freight forwarding, 
                we deliver reliable, cost-effective solutions that keep your business moving.
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
                    Get Your Quote Today
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
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Freight forwarding operations"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
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
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get competitive freight rates and expert logistics support for your next shipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact#quote">Request Quote</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-primary hover:bg-green-50"
              >
                <Link href="/contact">Contact Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
